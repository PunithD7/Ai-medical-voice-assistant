"use client";

import React from "react";

const Footer3D = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-16 pb-10 px-6 md:px-20 mt-20">
      {/* 3D layered background */}
      <div className="absolute inset-0 -z-10 transform -skew-y-2 bg-gradient-to-tr from-purple-900 via-indigo-900 to-gray-900 shadow-2xl rounded-t-[5rem]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-4 drop-shadow-lg">
            YourBrand
          </h2>
          <p className="text-gray-400 max-w-sm leading-relaxed drop-shadow-md">
            Building amazing digital experiences with modern UI/UX design and
            innovative technology.
          </p>

          {/* Social icons */}
          <div className="mt-6 flex space-x-4">
            {/* Example: Twitter */}
            {[
              { label: "Twitter", href: "#", icon: TwitterIcon },
              { label: "Facebook", href: "#", icon: FacebookIcon },
              { label: "Instagram", href: "#", icon: InstagramIcon },
              { label: "LinkedIn", href: "#", icon: LinkedInIcon },
            ].map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-gray-700 hover:bg-indigo-600 transition-colors shadow-lg"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Links Sections */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-10 text-gray-400 mt-10 md:mt-0">
          <div>
            <h3 className="mb-6 font-semibold text-lg text-white drop-shadow-md">
              Company
            </h3>
            <ul className="space-y-3">
              {["About Us", "Careers", "Blog", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="hover:text-indigo-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-semibold text-lg text-white drop-shadow-md">
              Services
            </h3>
            <ul className="space-y-3">
              {["Design", "Development", "Marketing", "Consulting"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-indigo-500 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-semibold text-lg text-white drop-shadow-md">
              Newsletter
            </h3>
            <p className="mb-4 text-gray-400">
              Subscribe to get our latest updates and offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex space-x-2 max-w-md"
            >
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm select-none drop-shadow-md max-w-7xl mx-auto">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer3D;

// ---------------- Icons ----------------
const TwitterIcon = () => (
  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 19c7.5 0 11.6-6.2 11.6-11.6 0-.2 0-.5 0-.7A8.3 8.3 0 0 0 22 4.5a8.2 8.2 0 0 1-2.3.6A4.1 4.1 0 0 0 21.4 3a8.2 8.2 0 0 1-2.6 1A4.1 4.1 0 0 0 11.6 7.5a11.6 11.6 0 0 1-8.4-4.3 4.1 4.1 0 0 0 1.3 5.5A4 4 0 0 1 2 8.6v.1a4.1 4.1 0 0 0 3.3 4 4.1 4.1 0 0 1-1.8.1 4.1 4.1 0 0 0 3.8 2.8A8.3 8.3 0 0 1 2 17.5a11.7 11.7 0 0 0 6.4 1.9" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.6l.4-4h-4v-1.6c0-1.1.3-1.4 1.4-1.4h2.6v-5h-3.4c-3.8 0-6 2.2-6 6.2v3.8z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="h-5 w-5 text-white"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73z" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v6h-5v-5a1 1 0 0 0-1-1h-1v6h-5v-12h5v2h.5a2.5 2.5 0 0 1 2.5 2.5v3.5h5v-6a6 6 0 0 0-6-6zM6 9H1v12h5zM3.5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
  </svg>
);
