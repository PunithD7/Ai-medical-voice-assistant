"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white-700 font-sans">
        Get to know your AI Medical Voice Assistant.
      </h2>
      <Carousel items={cards} />
      <Footer3D />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Medicin.AI is that you boast about HealthCare.
              </span>{" "}
              💬 Talk to Your Personal AI Medical Assistant
              <br />
              Experience the future of healthcare with our intelligent AI
              Medical Voice Agent — designed to offer instant, voice-based
              medical guidance at your fingertips. Whether you're feeling unwell
              or simply have health-related questions, our AI agent listens,
              understands, and responds like a real doctor. Backed by
              cutting-edge conversational AI and voice technology, it’s always
              ready to assist you with empathy, accuracy, and 24/7
              availability.
            </p>
            <img
              src="photo1.png"
              alt="Macbook mockup"
              height="10000"
              width="10000"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "WhatsApp Image 2025-07-30 at 8.52.08 PM.jpeg",
    content: <DummyContent />,
  },
  {
    category: "MediPrompt AI",
    title: "Listen to symptom instantly provide AI-Powered Medical prompts.",
    src: "photo2.png",
    content: <DummyContent />,
  },
  {
    category: "Care Scribe",
    title:
      "Automatically Write and simplify health records and doctor notes from speech.",
    src: "photo3.png",
    content: <DummyContent />,
  },
  {
    category: "MediDex AI",
    title:
      "Provide real-time voice explanation for medical terms, issues with medicines.",
    src: "photo4.png",
    content: <DummyContent />,
  },
  {
    category: "Personal Health Assistant",
    title:
      "Your Personal Voice therapist always ready to talk and boost your mood.",
    src: "photo5.png",
    content: <DummyContent />,
  },
  {
    category: "Smart Health Care",
    title:
      "Unlock unique AI Voice Assistant that listens, understands, supports users with timely guidance, daily care and making healthcare feel personal and accessible",
    src: "photo6.png",
    content: <DummyContent />,
  },
];

// --- Stunning Footer ---
const Footer3D = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-16 pb-10 px-6 md:px-20 mt-20">
      {/* 3D layered background */}
      <div className="absolute inset-0 -z-10 transform -skew-y-2 bg-gradient-to-tr from-purple-900 via-indigo-900 to-gray-900 shadow-2xl rounded-t-[5rem]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-4 drop-shadow-lg">
            Medicin.AI
          </h2>
          <p className="text-gray-400 max-w-sm leading-relaxed drop-shadow-md">
           Building the future of Healthcare with AI tecnology.
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
        © {new Date().getFullYear()} Medicin.AI. All rights reserved.
      </div>
    </footer>
  );
};

//export default Footer3D;

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
