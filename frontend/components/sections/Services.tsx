import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconEaseInOut,
  IconHelp,
    IconGrowth,
  IconMoneybag
} from "@tabler/icons-react";

export function Services() {
  const features = [
    {
        title: "Passive Income",
        description:
          "Earn money by completing daily tasks  ",
        icon: <IconGrowth />,

    },
  
    {
        title: "Wealth Management",
        description:
          "Manage your wealth with our AI agents. No more manual work.",
        icon: <IconMoneybag />,
    },
    {
      title: "Ease of use",
      description:
        "It's an user friendly platform, easy to use. No learning curve.",
      icon: <IconEaseInOut />,
    },
    
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
        title: "Deposites and Withdrawals",
        description: "You can deposit and withdraw money anytime you want.",
        icon: <IconAdjustmentsBolt />,
    },
    {
        title: "Get financial reports",
        description: "Get financial reports of your wealth and income.",
        icon: <IconAdjustmentsBolt />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <IconHelp />,
    },
    {
      title: "Money back guarantee",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <IconAdjustmentsBolt />,
    },
    
  ];
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 py-20">
        
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What we offers</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-300 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-300 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
export default Services;