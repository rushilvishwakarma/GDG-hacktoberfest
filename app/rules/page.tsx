"use client";
import Particles from '~/components/ui/particles';
import { SphereMask } from '~/components/ui/sphere-mask';
import { ny } from '~/lib/utils';
import { IconTerminal2 } from '@tabler/icons-react';
import TypingText from '~/components/ui/typing-text';
import { TbScoreboard } from "react-icons/tb";
import { MdLeaderboard } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { RiGuideLine } from "react-icons/ri";
import { PiFlagCheckeredFill } from "react-icons/pi";
const RulesPage = () => {
  const features = [
    {
      title: 'Issue Categories and Scoring',
      icon: <TbScoreboard />,
      renderDescription: () => (
        <ul className="list-disc pl-6 space-y-2 text-neutral-800 dark:text-neutral-300">
          <li>
            <strong>Beginner Level Issues:</strong> Worth 2 points each. These issues are designed for
            participants who are new to open-source contributions.
          </li>
          <li>
            <strong>Intermediate Level Issues:</strong> Worth 4 points each. These require a moderate
            level of experience and understanding of coding practices.
          </li>
          <li>
            <strong>Hard Level Issues:</strong> Worth 7 points each. These are complex and require
            advanced problem-solving skills.
          </li>
        </ul>
      ),
    },
    {
      title: 'Team Structure',
      icon: <BsPeopleFill />,
      renderDescription: () => (
        <ul className="list-disc pl-6 space-y-2 text-neutral-800 dark:text-neutral-300">
          <li>Teams can consist of up to 2-4 members.</li>
          <li>All team members must actively participate and contribute to solving issues.</li>
        </ul>
      ),
    },
    {
      title: 'Submission Guidelines',
      icon: <RiGuideLine />,
      renderDescription: () => (
        <ul className="list-disc pl-6 space-y-2 text-neutral-800 dark:text-neutral-300">
          <li>Each Pull Request that is accepted will be considered for scoring.</li>
          <li>Points will be awarded based on the successful merging of PRs and adherence to issue requirements.</li>
        </ul>
      ),
    },
    {
      title: 'Leaderboard and Eliminations',
      icon: <MdLeaderboard />,
      renderDescription: () => (
        <ul className="list-disc pl-6 space-y-2 text-neutral-800 dark:text-neutral-300">
          <li>An alive leaderboard will be maintained, updating scores as PRs are reviewed and merged.</li>
          <li>The bottom 4 teams will be eliminated every 1.5 hours based on their standings.</li>
        </ul>
      ),
    },
    {
      title: 'Final Judging',
      icon: <PiFlagCheckeredFill />,
      renderDescription: () => (
        <ul className="list-disc pl-6 space-y-2 text-neutral-800 dark:text-neutral-300">
          <li>The final evaluations will consider the final score of the team.</li>
          <li>The top 3 teams with the highest scores will be declared winners.</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="relative z-10 py-10 max-w-7xl mx-auto">
      {/* Rules Section */}
      <div className="px-6 pt-20 pb-6">
        <div className="animate-fade-in -translate-y-4 text-left text-lg tracking-tight opacity-0 [--animation-delay:400ms] md:text-S bg-neutral-700 px-4 py-2 shadow-lg rounded-sm md:whitespace-nowrap">
          <TypingText text="> Event Rules & Guidelines" />
        </div>
      </div>
      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 lg:px-8">
        {features.map((feature, index) => (
          <Feature key={`${feature.title}-${index}`} {...feature} index={index} />
        ))}
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
    </div>
  );
};

const Feature = ({
  title,
  renderDescription,
  icon,
  index,
}: {
  title: string;
  renderDescription: () => React.ReactNode;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={ny(
        'flex flex-col border py-8 px-6 dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800'
      )}
    >
      <div className="mb-4 text-neutral-600 dark:text-neutral-400">{icon}</div>
      <div className="text-lg font-bold mb-2 text-neutral-800 dark:text-neutral-100">{title}</div>
      <div className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs">{renderDescription()}</div>
    </div>
  );
};

export default RulesPage;
