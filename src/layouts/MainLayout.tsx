"use client";

import Link from "next/link";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-svh">
      {/* Fixed Navbar */}
      <div className="navbar bg-base-200 fixed top-0 left-0 right-0 z-50 shadow-md">
        {/* Hamburger Button - Left */}
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* App Name - Center */}
        <div className="flex-1 flex justify-center">
          <Link href="/" className="btn btn-ghost text-xl">
            ParabolicLab
          </Link>
        </div>

        {/* Empty flex-none for balance */}
        <div className="flex-none w-14"></div>
      </div>

      {/* Main Content with top padding to account for fixed navbar */}
      <main className="pt-16">{children}</main>
    </div>
  );
}
