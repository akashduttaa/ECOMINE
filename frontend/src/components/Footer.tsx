import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-emerald-900 via-green-900 to-emerald-900 text-white mt-auto border-t border-emerald-700">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-emerald-300">Ecomine</h3>
              <p className="text-emerald-100 text-sm mt-2">
                Transforming data into environmental action.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-emerald-300 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.56-5.12" />
                </svg>
              </a>
              <a
                href="#"
                className="text-emerald-300 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-emerald-300 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.437-.103.25-.129.599-.129.948v5.42h-3.554s.05-8.805 0-9.722h3.554v1.375c.427-.659 1.191-1.597 2.897-1.597 2.117 0 3.704 1.385 3.704 4.362v5.582zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.958-1.71 1.187 0 1.915.755 1.938 1.71 0 .951-.751 1.71-1.981 1.71zm1.581 11.597H3.715V9.03h3.203v11.422zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-300">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-emerald-100 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-emerald-100 hover:text-white transition-colors duration-200">
                  Scanner
                </Link>
              </li>
              <li>
                <Link href="#" className="text-emerald-100 hover:text-white transition-colors duration-200">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="text-emerald-100 hover:text-white transition-colors duration-200">
                  Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-300">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/documentation" className="text-emerald-100 hover:text-white transition-colors duration-200">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/api-docs" className="text-emerald-100 hover:text-white transition-colors duration-200">
                  API Docs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-emerald-100 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-emerald-100 hover:text-white transition-colors duration-200">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-300">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-emerald-100 text-sm">
                <span className="font-semibold">Email:</span>
                <br />
                <a href="mailto:hello@ecomine.com" className="hover:text-white transition-colors duration-200">
                  ecomine@gmail.com
                </a>
              </p>
              <p className="text-emerald-100 text-sm">
                <span className="font-semibold">Support:</span>
                <br />
                <a href="mailto:support@ecomine.com" className="hover:text-white transition-colors duration-200">
                  support@ecomine.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-700 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          <p className="text-emerald-100 text-sm">
            &copy; {currentYear} Ecomine. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/privacy-policy" className="text-emerald-100 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-emerald-100 hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-emerald-100 hover:text-white transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
