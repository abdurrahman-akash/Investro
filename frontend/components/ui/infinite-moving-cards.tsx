"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    logo?: string;
    quote?: string;
    name: string;
    title?: string;
    industry?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      if (containerRef.current) {
        containerRef.current.style.setProperty(
          "--animation-direction",
          direction === "left" ? "forwards" : "reverse",
        );
        const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
        containerRef.current.style.setProperty("--animation-duration", duration);
      }
      setStart(true);
    }
  }, [direction, speed]);
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li
            className="relative w-[220px] max-w-full shrink-0 rounded-2xl border border-zinc-200 bg-white px-6 py-8 md:w-[280px] flex flex-col items-center justify-center dark:border-zinc-700 dark:bg-zinc-900"
            key={item.name}
          >
            <div className="flex flex-col items-center justify-center gap-4">
              {item.logo && (
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              )}
               <div className="text-center">
                <h3 className="font-medium text-sm text-neutral-800 dark:text-gray-100">
                  {item.name}
                </h3>
                {item.industry && (
                  <p className="text-xs text-neutral-500 dark:text-gray-400 mt-1">
                    {item.industry}
                  </p>
                )}
              </div> 
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
