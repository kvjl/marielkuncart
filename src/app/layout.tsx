import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mariel Kuncart",
  description: "Portafolio de Mariel",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="font-sans bg-white text-gray-900">
        {/* Navbar */}
        <nav className="p-4 shadow bg-gray-100">
          <ul className="flex gap-6 ">
            <li>
              <Link href="/" className="hover:text-blue-600 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600 font-medium">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="hover:text-blue-600 font-medium"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 font-medium">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Page Content */}
        <main className="p-8">{children}</main>

        {/* Footer */}
        <footer className="p-4 text-center border-t mt-8 text-sm text-gray-600">
          © {new Date().getFullYear()} Mariel Kuncar
        </footer>
      </body>
    </html>
  );
}
