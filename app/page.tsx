"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppleCardsCarouselDemo } from "./_components/apple-cards-carousel";

// Particle Canvas Component
const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationFrameId: number;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particlesCount = 80;
    const particles: {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      alpha: number;
    }[] = [];

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < particlesCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.15,
          speedY: (Math.random() - 0.5) * 0.15,
          alpha: Math.random() * 0.5 + 0.2,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 192, 203, ${p.alpha})`; // light pink color with alpha
        ctx.fill();
      });
    }

    function animate() {
      draw();
      animationFrameId = requestAnimationFrame(animate);
    }

    initParticles();
    animate();

    // Handle resize
    function onResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20"
      style={{ background: "transparent" }}
    />
  );
};

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0b1c6e] via-[#3b0a66] to-[#2a1c42] text-white font-sans select-none">
      {/* Background gradient */}
      <ParticlesBackground />

      <Navbar />

      <main className="relative z-10 px-6 py-10 md:py-20 max-w-7xl mx-auto">
        <h1 className="mx-auto max-w-5xl text-center text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl drop-shadow-lg">
          {"🩺 Transforming Healthcare: Revolutionize Patient Care with AI Medical Voice Assistant Agents"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.08,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="mx-auto mt-8 max-w-xl text-center text-lg text-gray-300 drop-shadow-md"
        >
          Deliver seamless, real-time healthcare support through intelligent voice
          interactions. Automate symptom checks, appointments, and patient
          follow-ups — 24/7.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => router.push("/dashboard")}
            className="w-64 rounded-lg bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 px-8 py-3 text-white font-semibold shadow-lg hover:scale-105 hover:brightness-110 transition-transform duration-300"
          >
            Get Started
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.3 }}
          className="relative z-10 mt-20 rounded-3xl border border-white/20 bg-white/5 p-4 shadow-md backdrop-blur-md max-w-4xl mx-auto"
        >
          <div className="overflow-hidden rounded-xl border border-white/20 w-full h-full">
            <img
              src="Our Team.jpeg"
              alt="Landing page preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={2000}
            />
          </div>
        </motion.div>
      </main>

      <div className="z-10 mt-12">
        <AppleCardsCarouselDemo />
      </div>

      <footer className="mt-20 w-full border-t border-white/20 py-4 text-center text-sm text-gray-300 backdrop-blur-md">
        © {new Date().getFullYear()} Medicin.AI — All rights reserved.
      </footer>
    </div>
  );
}

const Navbar = () => {
  const router = useRouter();
  const { user } = useUser();

  return (
    <nav className="relative z-30 flex w-full items-center justify-between border-b border-white/20 bg-white/5 px-6 py-4 text-white backdrop-blur-lg shadow-lg">
      <div className="flex items-center gap-3">
        <div className="size-7 rounded-full bg-gradient-to-br from-blue-700 via-purple-700 to-pink-700 shadow-lg" />
        <h1 className="text-xl font-extrabold md:text-3xl drop-shadow-lg">Medicin.AI</h1>
      </div>

      {!user ? (
        <Link href={"/sign-in"}>
          <button className="w-28 rounded-lg bg-white px-7 py-2 font-semibold text-black shadow-lg hover:scale-105 transition-transform duration-300 md:w-36">
            Login
          </button>
        </Link>
      ) : (
        <div className="flex gap-6 items-center">
          <UserButton />
          <Button
            onClick={() => router.push("/dashboard")}
            className="bg-blue-700 hover:bg-blue-800 text-white shadow-lg"
          >
            Dashboard
          </Button>
        </div>
      )}
    </nav>
  );
};
