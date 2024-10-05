'use client';
import { Button } from "~/components/ui/button";
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CountdownTimer from '~/components/ui/CountdownTimer';
import Link from "next/link";
import TypingText from '~/components/ui/typing-text';
const HeroSection: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  // Set your target date here (October 5, 2024, at 9:30 AM IST)
  const targetDate = new Date('2024-10-05T09:30:00+05:30');

  return (
    <section
      id="hero"
      ref={ref}
      className="md:min-h-screen flex flex-col justify-center items-start relative pt-20 md:pt-0 w-full px-6 md:px-12 lg:px-16"
    >
      {/* Main content with text and timer */}
      <div className="flex flex-col md:flex-row md:items-center justify-between w-full space-y-4 mb-1 md:space-y-0 pb-3">
        <div className="flex-1 pr-10">
        <div className="animate-fade-in -translate-y-4 text-left text-lg tracking-tight opacity-0 [--animation-delay:400ms] md:text-S inline-block bg-neutral-700 px-4 py-2 shadow-lg rounded-sm md:whitespace-nowrap sm:pr-5">
  <TypingText
    text="> Google Developer Groups RAIT Presents"
  />
</div>


          {/* Heading */}
          <h1 className="animate-fade-in -translate-y-4 text-left bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-4 sm:py-6 text-5xl font-medium leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:to-white/40">
            HACKTOBER
            <br className="md:block" />
            FEST ’24
          </h1>

          {/* Button below the heading 
          <Button asChild className="mt-3 mb-6">
            <Link href="/login">Register for Event</Link>
          </Button>*/}
        </div>

        {/* Countdown Timer aligned with the heading on desktop */}
        <div className="flex-1 flex justify-center md:justify-end items-center mt-6 md:mt-0">
          <div className="w-full justify-center md:justify-end md:pt-12 pb-20">
            <div
              className={`relative rounded-xl bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:w-1/2 before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_100%)] before:[filter:blur(180px)] ${
                inView ? 'before:animate-image-glow' : ''
              }`}
            >
              {/*<div className="w-full relative z-10 rounded-[inherit] border border-white/10 bg-white/5">
                <CountdownTimer targetDate={targetDate} />
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
