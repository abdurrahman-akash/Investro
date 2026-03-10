"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function OurPartners() {
  return (
    <div className="py-20 bg-white dark:bg-black dark:bg-grid-white/[0.05]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Our Trusted Partners
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            We collaborate with industry-leading organizations to deliver exceptional services and innovative solutions.
          </p>
        </div>
        
        <div className="flex flex-col space-y-10">
          {/* First row of partners moving right */}
          <InfiniteMovingCards
            items={partnersRowOne}
            direction="right"
            speed="slow"
            pauseOnHover={true}
          />
          
          {/* Second row of partners moving left */}
          <InfiniteMovingCards
            items={partnersRowTwo}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </div>
      </div>
    </div>
  );
}

// Partner items for the first row
const partnersRowOne = [
  {
    logo: "/investora_logo/main_logo.png",
    name: "Investro Financial",
    industry: "Financial Services",
  },
  {
    logo: "/partners/Acme_logo_PNG1.png",
    name: "Acme Corporation",
    industry: "Technology",
  },
  {
    logo: "/partners/Amazon-Logo.png",
    name: "Amazon",
    industry: "E-commerce",
  },
  {
    logo: "/partners/Databricks-Logo.png",
    name: "Data Bricks",
    industry: "Data Analytics",
  },
  {
    logo: "/images/partners/Polkadot-Logo-PNG9.png",
    name: "Polkadot",
    industry: "Blockchain",
  },
  {
    logo: "/partners/Flutterwave_logo_PNG1.png",
    name: "Flutter Wave",
    industry: "Payment Solutions",
  },
  {
    logo: "/partners/google_PNG.png",
    name: "Google",
    industry: "Technology"
  },
];

// Partner items for the second row
const partnersRowTwo = [
  {
    logo: "/partners/nikePNG.png",
    name: "Nike",
    industry: "Sportswear",
  },
  {
    logo: "/partners/google_PNG.png",
    name: "Google",
    industry: "Technology"
  },
  {
    logo: "/partners/6sense-Logo.png",
    name: "6 Sense Analytics",
    industry: "Analytics",
  },
  {
    logo: "/partners/Moodys_logo_PNG1.png",
    name: "Moody",
    industry: "Digital Transformation",
  },
  {
    logo: "/partners/Amazon-Logo.png",
    name: "Amazon",
    industry: "E-commerce",
  },
  {
    logo: "/partners/Santander_logo_PNG1.png",
    name: "Santander Bank",
    industry: "Banking",
  },
  {
    logo: "/partners/Simple_logo_PNG4.png",
    name: "Simple Finance",
    industry: "FinTech",
  },
];
