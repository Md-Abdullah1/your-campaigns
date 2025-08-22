// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { authService } from '@/lib/auth';

// export default function Home() {
//   const router = useRouter();

//   useEffect(() => {
//     const token = authService.getToken();
//     if (token) {
//       router.push('/dashboard');
//     } else {
//       router.push('/login');
//     }
//   }, [router]);


import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">YourCampaigns</h1>
          <div className="space-x-4">
            <Link href="/auth/login">
              <span className="text-gray-700 hover:text-indigo-600 font-medium cursor-pointer">
                Login
              </span>
            </Link>
            <Link href="/auth/register">
              <span className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium transition">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
          Manage Campaigns,{" "}
          <span className="text-indigo-600">Effortlessly</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          A powerful campaign management system to create, track, and analyze
          your marketing campaigns in one place.
        </p>
        <div className="space-x-4">
          <Link href="/auth/register">
            <span className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">
              Get Started
            </span>
          </Link>
          <Link href="/auth/login">
            <span className="inline-block border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold transition">
              Log In
            </span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} CampaignFlow. All rights reserved.
      </footer>
    </div>
  );
}
