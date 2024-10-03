'use client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Button } from '~/components/ui/button';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { ny } from '~/lib/utils';
import AnimatedGridPattern from '~/components/ui/animated-grid-pattern';
import { BsFileRuledFill } from "react-icons/bs";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsTitle,
  GlowingStarsDescription,
} from '~/components/ui/glowing-stars';
import { IconTerminal2 } from '@tabler/icons-react';
import HyperText from "~/components/ui/hyper-text";
import { CornerIcon } from '~/components/ui/card-corner';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '~/components/ui/card';
import { MdOutlineScoreboard } from "react-icons/md";
const Icon = () => (
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



const Skeleton = ({ index }: { index?: number }) => (
  <div
    className={ny(
      'bg-background relative flex h-full items-center justify-center overflow-hidden rounded-xl border md:shadow-xl',
      index === 2 ? 'min-h-[100px]' : 'min-h-[200px]',
      'md:min-h-[250px]',
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
    icon: <IconTerminal2 className="h-4 w-4 text-neutral-500" />,
    link: '/details',
  },
  {
    title: 'Rules & Guidelines',
    description: "Let's keep pushing",
    header: <Skeleton index={1} />,
    icon: <BsFileRuledFill  className="h-4 w-4 text-neutral-500" />,
    link: '/rules',
  },
  {
    title: 'Hacktober Fest Leaderboard',
    description: 'I won em you gotta.',
    header: <Skeleton index={2} />,
    icon: <MdOutlineScoreboard className="h-4 w-4 text-neutral-500" />,
    link: 'http://gdg.duckdns.org',
  },
];

const BentoGridDemo = () => (
  <div className="text-left mx-auto max-w-screen-xl px-0 md:px-8 gap-6">
    <Card>
      <CardHeader>
        <CardDescription>Event Overview</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          An exciting two-day event that is all about celebrating open-source contribution and the power of collaborative coding. We're bringing together developers and students to dive into open-source projects and sharpen their Git/GitHub skills in a fun and engaging environment. 
        </p>
                
        <HyperText
      className="sm:text-base md:text-2xl font-bold text-black dark:text-white pt-20"
      text="Up to 10K Worth Cash Prizes"
    />

          <p>
      and certificates will be provided.
      </p>
      </CardContent>
    </Card>
    <BentoGrid className="w-full gap-4 text-left md:gap-10 grid grid-cols-1 md:grid-cols-2 pt-10">
      {items.map((item, i) => (
        i < 2 ? (
          <Link key={item.title} href={item.link} passHref>
            <BentoGridItem
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className="p-4 cursor-pointer"
            />
          </Link>
        ) : (
          <div key={item.title} className="md:col-span-2 flex justify-center">
            <GlowingStarsBackgroundCard className="h-full max-w-[500px] flex flex-col p-4 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none">
              <div className="mt-auto flex justify-between items-center">
                <div className="group-hover/bento:translate-x-2 transition duration-200  dark:text-neutral-300">
                {item.icon}
                  <GlowingStarsTitle className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mt-2">
                    {item.title}
                  </GlowingStarsTitle>
                  <GlowingStarsDescription className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {item.description}
                  </GlowingStarsDescription>
                </div>
              </div>
            </GlowingStarsBackgroundCard>
          </div>
        )
      ))}
    </BentoGrid>
  </div>
);

const ClientSection = () => (
  <section id="clients" className="mx-auto max-w-7xl px-6 text-center md:px-8">
    <BentoGridDemo />
    <div className="py-14">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 pt-10">
        <h2 className="text-center text-sm font-semibold text-gray-600">VALUABLE SPONSORS</h2>
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


    <h2 className="pt-20 text-center text-sm font-semibold text-gray-600">WEBPAGES CRAFTED BY</h2>
<div className="grid grid-cols-2 w-full gap-2 max-w-2xl mx-auto md:grid-cols-2">
  {[
    {
      name: 'Rushil Vishwakarma',
      title: 'Web-Dev Co-Head',
      imageSrc: '/rushil.png',
      alt: 'Rushil Vishwakarma',
    },
    {
      name: 'Deeptanshu Lal',
      title: 'GDG Web-Dev Facilitator',
      imageSrc: '/deeptanshu.png',
      alt: 'Deeptanshu Lal',
    },
  ].map((member) => (
    <div
      key={member.name}
      className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center justify-center relative mt-7 m-2"
    >
      {/* Corner Icons */}
      <CornerIcon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <CornerIcon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <CornerIcon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <CornerIcon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      {/* Member Name */}
      <h1 className="text-left animate-fade-in bg-gradient-to-br from-black from-60% to-black/20 bg-clip-text pt-5 text-xl sm:text-2xl font-bold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-white dark:to-white/40">
        {member.name.split(' ')[0]}{' '}
        <span className="block sm:inline">{member.name.split(' ')[1]}</span>
      </h1>

      {/* Member Title */}
      <p className="text-[9px] sm:text-sm border font-light dark:border-white/[0.2] border-black/[0.1] rounded-full mt-2 mb-1 text-black dark:text-white px-2 py-0.5">
        {member.title}
      </p>

      {/* Member Image */}
      <div className="flex justify-center items-center w-full h-full">
        <Image
          alt={member.alt}
          src={member.imageSrc}
          width={150}
          height={150}
          className="w-full h-auto object-cover" // These classes ensure the image scales correctly
        />
      </div>
    </div>
  ))}
</div>


  </section>
);

export default ClientSection;
