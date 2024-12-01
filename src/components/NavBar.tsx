
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [currentDateTime, setCurretDateTime] = useState(``);
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };

      setCurretDateTime(
        now.toLocaleDateString("en-US", options) +
          " " +
          now.toLocaleTimeString("en-US", { hour12: false })
      );
    };

    updateDateTime();
    const interValid = setInterval(updateDateTime, 1000);
    return () => clearInterval(interValid);
  }, []);

  return (
    <header className="text-gray-400 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className="flex-1 text-black mb-4 md:mb-0">
          <span>{currentDateTime}</span>
        </div>

        <nav className="md:ml-auto flex flex-wrap items-center gap-4 text-black justify-center">
          <Link
            href={"/"}
            className="hover:text-red-700 transition-colors duration-300 transform hover:scale-105">
            Home
          </Link>

          <Link
            href={"/about"}
            className="hover:text-red-700 transition-colors duration-300 transform hover:scale-105">
            About
          </Link>

          <Link
            href={"/blog"}
            className="hover:text-red-700 transition-colors duration-300 transform hover:scale-105">
            Blog
          </Link>

          <Link
            href={"/contact"}
            className="hover:text-red-700 transition-colors duration-300 transform hover:scale-105">
            Contact
          </Link>

          <Link href="https://github.com/NEHADEC" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center bg-blue-800 border-0 py-1 px-3 focus:outline-none hover:bg-blue-900 rounded text-white mt-4 md:mt-0 transition-colors duration-300">
              Linkedin
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
