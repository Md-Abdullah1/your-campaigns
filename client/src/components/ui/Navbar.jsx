// src/components/Navbar.jsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "../../redux/store/hooks";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useAppSelector((state) => state.auth);
  const [hideNavbar, setHideNavbar] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("token");
    // Reset Redux state will be handled by dispatch — for now, clear and redirect
    router.push("/auth/login");
  };

  // Don't show navbar on auth pages
  if (
    pathname === "/auth/login" ||
    pathname === "/auth/register" ||
    pathname === "/"
  ) {
    return null;
  }
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Links */}
          <div className="flex items-center space-x-8">
            <Link href="/">
              <span className="text-xl font-bold text-indigo-600">
                CampaignFlow
              </span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/dashboard">
                <span className="text-gray-700 hover:text-indigo-600 font-medium">
                  Dashboard
                </span>
              </Link>
              <Link href="/campaigns">
                <span className="text-gray-700 hover:text-indigo-600 font-medium">
                  Campaigns
                </span>
              </Link>
              {/* Optional: Leads Link */}
              <Link href="/leads">
                <span className="text-gray-700 hover:text-indigo-600 font-medium">
                  Leads
                </span>
              </Link>
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700">
              Hi, <span className="font-semibold">{user?.name || "User"}</span>
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Optional) */}
      <div className="md:hidden bg-gray-50 px-4 py-2">
        <div className="flex flex-col space-y-2">
          <Link href="/dashboard">
            <span className="text-gray-700 hover:text-indigo-600 block font-medium">
              Dashboard
            </span>
          </Link>
          <Link href="/campaigns">
            <span className="text-gray-700 hover:text-indigo-600 block font-medium">
              Campaigns
            </span>
          </Link>
          <Link href="/leads">
            <span className="text-gray-700 hover:text-indigo-600 block font-medium">
              Leads
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
