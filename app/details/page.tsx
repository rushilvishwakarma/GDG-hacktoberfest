// Ensure you import necessary modules
import { NextPage } from 'next'; // Import NextPage if you are using it
import ClientSection from '~/components/landing/client-section';
import HeroSection from '~/components/landing/hero-section';
import { Timeline } from '~/components/ui/timeline';
import Particles from '~/components/ui/particles';
import { SphereMask } from '~/components/ui/sphere-mask';
import { Badge } from "~/components/ui/badge"; 
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
 } from '~/components/ui/card';
 import { RainbowButton } from "~/components/ui/rainbow-button";
 import Link from "next/link";

// Use NextPage if needed for better type inference
const Page: NextPage = () => {
  return (
    <>
      <div className="mx-auto pt-20 px-6 md:px-8 lg:px-10">
        <Card>
          <CardHeader>
            <CardDescription>Objective</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our goal is to give developers and students a chance to make meaningful
              contributions to open-source projects while gaining valuable experience in
              version control and teamwork. We want to help them enhance their
              understanding of collaborative development and provide practical skills that
              they can carry forward in their coding journey and make meaningful
              contributions in the field of computer science.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-3xl pt-10">
          Event Flow
        </h2>
      </div>

      <TimelineDemo />

      <div className="pt-10 md:flex md:space-x-4 mx-auto px-6 md:px-8 lg:px-10 pb-6 space-y-4 md:space-y-0">
        <Card className="flex-1">
          <CardHeader>
            <CardDescription>Activities</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              We’ve prepared a variety of coding challenges for the students and
              developers to tackle, ranging from beginner to advanced levels. They’ll have
              the chance to apply their coding skills to real-world problems and showcase
              their coding expertise. Our goal is to create an environment focused on
              problem-solving and teamwork, so we encourage them to dive into
              hands-on coding and collaborate with their fellow participants.
            </p>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardDescription>Learning Opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              We’ll kick things off with a session on Git/GitHub basics, where we’ll cover
              essential topics like pull requests, merge requests, and how to manage
              repositories. The participants will have the opportunity to get some
              practical experience with these tools and learn best practices for making
              impactful open-source contributions.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex">
        <div className="ml-auto mx-auto px-6 md:px-8 lg:px-10 ">
          <RainbowButton>
            <Link href="/rules">View Rules</Link>
          </RainbowButton>
        </div>
      </div>

      <SphereMask />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color="#ffffff"
      />
    </>
  );
}

export default Page;

// Define TimelineDemo separately and ensure it's compatible
const TimelineDemo = (): JSX.Element => {
  const data = [
    {
      title: "Day 1",
      date: "5-10-2024",
      content: (
        <ul className="list-none text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 space-y-4">
          <li>
            <Badge className="mr-2">9:30 AM</Badge>
            Introduction to GitHub
          </li>
          <li>
            <Badge className="mr-2">11:30 AM</Badge>
            Open source contribution begins
          </li>
          <li>
            <Badge className="mr-2">1:30 PM</Badge>
            Break
          </li>
          <li>
            <Badge className="mr-2">2:30 PM</Badge>
            RedBull Vault Event
          </li>
          <li>
            <Badge className="mr-2">3:00 PM</Badge>
            Resume contribution
          </li>
          <li>
            <Badge className="mr-2">6:00 PM</Badge>
            End of Day 1
          </li>
        </ul>
      ),
    },
    {
      title: "Day 2",
      date: "6-10-2024",
      content: (
        <ul className="list-none text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 space-y-4">
          <li>
            <Badge className="mr-2">9:30 AM</Badge>
            Start of day 2 contribution
          </li>
          <li>
            <Badge className="mr-2">12:30 PM</Badge>
            Lunch Break
          </li>
          <li>
            <Badge className="mr-2">1:30 PM</Badge>
            Final round for open source contribution
          </li>
          <li>
            <Badge className="mr-2">5:00 PM</Badge>
            Result Declaration and Prize Distribution
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
