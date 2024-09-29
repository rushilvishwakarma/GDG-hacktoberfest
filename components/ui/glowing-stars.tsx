"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ny } from "~/lib/utils";
import { useRouter } from "next/navigation"; // Use Next.js router

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [clickPending, setClickPending] = useState(false); // To track click status
  const router = useRouter();

  // Handle click with delay for RAIT pattern
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // Prevent immediate navigation
      setMouseEnter(true); // Show glowing pattern on click
      setClickPending(true); // Track that we are waiting to navigate

      // Delay navigation for 3 seconds to allow RAIT animation to complete
      setTimeout(() => {
        setClickPending(false); // Reset clickPending after delay
        router.push("/leaderboard"); // Navigate to the leaderboard after delay
      }, 3000); // Delay of 3 seconds (3000ms)
    } else {
      router.push("/leaderboard"); // Immediate navigation on desktop
    }
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      className={ny(
        "bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4 w-full h-full rounded-xl border border-[#eaeaea] dark:border-neutral-600 cursor-pointer",
        className
      )}
    >
      <div className="flex justify-end items-end pb-2 md:pb-9">
        <Illustration mouseEnter={mouseEnter} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export const GlowingStarsDescription = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <p className={ny("font-sans text-neutral-600 dark:text-neutral-200 pt-1", className)}>
      {children}
    </p>
  );
};

export const GlowingStarsTitle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h2 className={ny("font-bold text-1xl text-[#eaeaea]", className)}>
      {children}
    </h2>
  );
};

export const Illustration = ({ mouseEnter }: { mouseEnter: boolean }) => {
  const stars = 126; // Total number of stars
  const columns = 18; // Number of columns for grid

  const [glowingStars, setGlowingStars] = useState<number[]>([]); // Default glowing stars
  const [raitPattern, setRaitPattern] = useState<number[]>([]); // RAIT star pattern

  const highlightedStars = useRef<number[]>([]);

  // Define the RAIT pattern star indices for a simple grid display
  const LETTERS_STAR_INDICES = {
    R: [0, 18, 36, 54, 72, 90, 108, 1, 2, 3, 21, 39, 55, 56, 57, 73, 92, 111], // Example for "R"
    A: [41, 59, 77, 95, 113, 24, 7, 26, 45, 63, 81, 99, 117, 60, 61, 62], // Complete definition for "A"
    I: [11, 12, 13, 30, 48, 66, 84, 102, 119, 120, 121], // Example for "I"
    T: [15, 16, 17, 34, 52, 70, 88, 106, 124], // Example for "T"
    // Add more letters as needed
  };

  // Combine all indices for "RAIT"
  const ALL_LETTERS_INDICES = [
    ...LETTERS_STAR_INDICES.R,
    ...LETTERS_STAR_INDICES.A,
    ...LETTERS_STAR_INDICES.I,
    ...LETTERS_STAR_INDICES.T,
    // Include additional letters if needed
  ];

  useEffect(() => {
    // Set initial random glowing stars
    const interval = setInterval(() => {
      if (!mouseEnter) {
        // Only set random stars when not hovering
        highlightedStars.current = Array.from({ length: 5 }, () =>
          Math.floor(Math.random() * stars)
        );
        setGlowingStars([...highlightedStars.current]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [mouseEnter]);

  useEffect(() => {
    if (mouseEnter) {
      // On hover, switch to RAIT pattern and clear random glowing stars
      setRaitPattern([...ALL_LETTERS_INDICES]); // Update with RAIT pattern
      setGlowingStars([]); // Clear random glowing stars
    } else {
      // Revert to default glowing stars when not hovering
      setRaitPattern([]);
    }
  }, [mouseEnter]);

  return (
    <div
      className="h-48 p-1 w-full"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `1px`,
      }}
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx);
        const isInRaitPattern = raitPattern.includes(starIdx);
        const delay = (starIdx % 10) * 0.1;
        const staticDelay = starIdx * 0.01;

        return (
          <div key={`matrix-col-${starIdx}`} className="relative flex items-center justify-center">
            <Star isGlowing={isInRaitPattern || isGlowing} delay={mouseEnter ? staticDelay : delay} />
            {mouseEnter && isInRaitPattern && <Glow delay={staticDelay} />}
            <AnimatePresence mode="wait">
              {isGlowing && !isInRaitPattern && <Glow delay={delay} />} {/* Maintain default glow */}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
  return (
    <motion.div
      key={delay}
      initial={{ scale: 1 }}
      animate={{
        scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
        background: isGlowing ? "#fff" : "#666",
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      className={ny("bg-[#777] h-[1px] w-[1px] rounded-full relative z-20")}
    />
  );
};

const Glow = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      exit={{ opacity: 0 }}
      className="absolute left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-blue-500 blur-[1px] shadow-2xl shadow-blue-400"
    />
  );
};
