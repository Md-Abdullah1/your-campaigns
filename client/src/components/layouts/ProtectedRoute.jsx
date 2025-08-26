"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getAuthentication } from "@/helpers/getAuthentication";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = getAuthentication();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && typeof window !== "undefined") {
      router.push("/auth/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Redirecting to login...</p>
      </div>
    );
  }

  return children;
}
