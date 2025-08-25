"use client";

import { useRouter } from "next/navigation";
import { useAppSelector } from "../../redux/store/hooks";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
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
