"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="flex justify-center text-center gap-4">
            <Link
                href="/"
                className={`px-4 py-2 rounded ${
                    pathname === "/" ? "bg-white text-blue-500" : "text-white"
                }`}
            >
                Home
            </Link>
            <Link
                href="/about"
                className={`px-4 py-2 rounded ${
                    pathname === "/about" ? "bg-white text-blue-500" : "text-white"
                }`}
            >
                About
            </Link>
            <Link
                href="/products"
                className={`px-4 py-2 rounded ${
                    pathname === "/products" ? "bg-white text-blue-500" : "text-white"
                }`}
            >
                Products
            </Link>
        </nav>
    );
}