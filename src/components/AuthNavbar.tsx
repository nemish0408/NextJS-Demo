"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AuthNavbar = () => {
  const navLinks = [
    { name: "Login", href: "/login" },
    { name: "Registration", href: "/registration" },
    { name: "Forgot Password", href: "/forgotpassword" },
    { name: "Profile", href: "/profile" },
    ];
  const pathName = usePathname();
  return (
    <div className="flex gap-4 align-middle p-4 h-full">
      {navLinks.map((link) => {
        const isActive = pathName.endsWith(link.href);

        return (
          <Link
            href={link.href}
            key={link.name}
            className={
              isActive
                ? "text-[#f1f1f1 font-semibold]"
                : "text-[#aaa] hover:text-[#f1f1f1]"
            }
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default AuthNavbar;
