"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NotFound: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 2500); // Redirect after 2.5 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, [router]);

  return (
    <div className="flex text-white flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-xl mt-4">Redirecting you to the home page...</p>
    </div>
  );
};

export default NotFound;
