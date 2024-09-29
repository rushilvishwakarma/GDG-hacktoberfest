'use client';
import Link from 'next/link';
import { Button } from "~/components/ui/button"
import Image from 'next/image';
import React from 'react';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { ny } from '~/lib/utils';
import AnimatedGridPattern from '~/components/ui/animated-grid-pattern';
import {
  GlowingStarsBackgroundCard,
  GlowingStarsTitle,
  GlowingStarsDescription,
} from '~/components/ui/glowing-stars';
import { IconFileBroken, IconSignature } from '@tabler/icons-react';
import { CornerIcon } from "~/components/ui/card-corner";
const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};

const Skeleton = ({ index }: { index?: number }) => (
  <div
    className={ny(
      'bg-background relative flex w-full h-full items-center justify-center overflow-hidden rounded-xl border md:shadow-xl',
      index === 2 ? 'min-h-[100px]' : 'min-h-[200px]',
      'md:min-h-[200px]',
    )}
  >
    <AnimatedGridPattern
      numSquares={30}
      maxOpacity={0.5}
      duration={3}
      repeatDelay={1}
      className={ny(
        '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]',
        'inset-x-0 inset-y-[-32%] h-full skew-y-12',
      )}
    />
  </div>
);

const items = [
  {
    title: 'Details & Timeline',
    description: 'Know more about the event.',
    header: <Skeleton index={0} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: '/details',
  },
  {
    title: 'Rules',
    description: "Let's keep pushing",
    header: <Skeleton index={1} />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: '/rules',
  },
  {
    title: 'Hacktober Fest Leaderboard',
    description: 'I won em you gotta.',
    header: <Skeleton index={2} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: '/leaderboard',
  },
];

const BentoGridDemo = () => {
  return (
    <BentoGrid className="w-full gap-4 text-left md:gap-6">
      {items.map((item, i) => (
        i === 2 ? (
          <GlowingStarsBackgroundCard
            key={i}  // Add unique key
            className="h-full flex flex-col p-4 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none"
          >
            <div className="mt-auto flex justify-between items-center">
              <div className="group-hover/bento:translate-x-2 transition duration-200">
                <GlowingStarsTitle className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                  {item.title}
                </GlowingStarsTitle>
                <GlowingStarsDescription className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                  {item.description}
                </GlowingStarsDescription>
              </div>
            </div>
          </GlowingStarsBackgroundCard>
        ) : (
          <Link key={i} href={item.link} passHref>
            <BentoGridItem
              key={i}  // Add unique key
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={`p-4 ${i === 0 ? 'row-span-2' : ''} cursor-pointer`}
            />
          </Link>
        )
      ))}
    </BentoGrid>
  );
};

export default function ClientSection() {
  return (
    <section id="clients" className="mx-auto max-w-7xl px-6 text-center md:px-8">
      <BentoGridDemo />
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8 pt-10">
          <h2 className="text-center text-sm font-semibold text-gray-600">
            VALUABLE SPONSORS
          </h2>
          <div className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
              <li className="flex items-center justify-center">
                <Image
                  alt="Redbull"
                  src="/redbull.png"
                  className="px-2 dark:brightness-0 dark:invert"
                  width={92}
                  height={32}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full gap-2 max-w-2xl mx-auto md:grid-cols-2">
  {[
    {
      name: "Rushil Vishwakarma",
      title: "Web-Development Co-Head",
    },
    {
      name: "Deeptanshu Lal",
      title: "GDG Leaderboard Creator",
    },
  ].map((member) => (
    <div
      key={member.name}
      className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start p-3 relative h-[15rem] sm:h-[25rem] mt-10 m-2"
    >
      {/* Corner Icons */}
      <CornerIcon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <CornerIcon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <CornerIcon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <CornerIcon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      {/* Member Name */}
      <h1 className="animate-fade-in -translate-y-4 text-left bg-gradient-to-br from-black from-60% to-black/20 bg-clip-text pt-3 text-xl sm:text-2xl font-bold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-white dark:to-white/40">
        {member.name.split(' ')[0]} <span className="block sm:inline">{member.name.split(' ')[1]}</span>
      </h1>

      {/* Member Title */}
      <p className="text-[9px] sm:text-sm border font-light dark:border-white/[0.2] border-black/[0.1] rounded-full mt-4 mb-1 text-black dark:text-white px-2 py-0.5">
        {member.title}
      </p>
    </div>
  ))}
</div>


    </section>
  );
}
