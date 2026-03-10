"use client";
import React from "react";
import { calsans } from "@/fonts/calsans";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
        {/* <BoxesCore /> */}

      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <div className="mb-12 text-center">
          <h1 className={twMerge("text-3xl md:text-4xl font-bold mb-4 text-blue-800", calsans.className)}>
            Our Mission & Vision
          </h1>
          <p className="text-gray-600">Empowering e-commerce merchants with strategic visibility solutions</p>
        </div>
        {missionContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-16">
            <h2 className="bg-blue-600 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl font-semibold mb-4 text-blue-800", calsans.className)}>
              {item.title}
            </p>

            <div className="text-sm prose prose-sm dark:prose-invert max-w-none">
              {item?.image && (
                <Image 
                  src={item.image}
                  alt={item.imageAlt || "Investora services"}
                  height={500}
                  width={1000}
                  className="rounded-lg mb-6 object-cover w-full h-64"
                />
              
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12 py-10">
        <p className="text-gray-500 text-sm">
          Join us in transforming the e-commerce landscape and driving sustainable growth for merchants worldwide.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          <a href="/auth/registration" className="text-blue-600 hover:underline">
            Become a partner today
          </a>
        </p>
      </div>
    </TracingBeam>
  );
}

const missionContent = [
  {
    title: "Empowering E-commerce Success",
    description: (
      <>
        <p className="mb-4">
          At Investora, we specialize in helping Temu and Amazon merchants increase their product visibility in a crowded marketplace. 
          Our mission is to provide strategic solutions that elevate your product listings, ensuring they reach the right audience at the right time.
        </p>
        <p className="mb-4">
          Through our high-volume order capabilities and specialized marketing techniques, we create sustainable growth for e-commerce businesses 
          looking to scale their operations and increase their market share.
        </p>
        <p>
          Our team of experts understands the unique challenges of online marketplaces and delivers customized strategies to help your 
          products stand out from the competition.
        </p>
      </>
    ),
    badge: "Our Mission",
    image: "/images/corporate-businessman-giving-presentation-large-audience.jpg",
    imageAlt: "Business presentation illustrating Investora's mission"
  },
  {
    title: "Create Value Through Partnership",
    description: (
      <>
        <p className="mb-4">
          We believe in creating value through genuine partnerships. When you work with Investora, you&apos;re not just hiring a service provider - you&apos;re gaining a 
          strategic partner invested in your success.
        </p>
        <p className="mb-4">
          Our partnership model offers significant earning potential, with affiliates able to earn between 10,000-20,000 EGP daily by helping increase 
          product awareness and visibility for our merchant clients.
        </p>
        <p>
          We maintain the highest standards through our qualification process, ensuring that all team members are properly vetted and trained 
          to deliver exceptional results for our clients.
        </p>
      </>
    ),
    badge: "Our Values",
    image: "/images/shaking-hands-3091906_1280.jpg",
    imageAlt: "Partnership and collaboration with Investora"
  },
  {
    title: "Building the Future of E-commerce Marketing",
    description: (
      <>
        <p className="mb-4">
          Our vision extends beyond current marketplace dynamics. We&apos;re building systems and strategies that will continue to evolve with 
          the rapidly changing e-commerce landscape.
        </p>
        <p className="mb-4">
          By leveraging data analytics, market trends, and consumer behavior insights, we develop forward-thinking approaches that 
          not only address current challenges but anticipate future opportunities.
        </p>
        <p>
          Join us in transforming how products gain visibility and connect with their ideal customers in the digital marketplace. Together, 
          we can create sustainable growth and success in the competitive world of online retail.
        </p>
      </>
    ),
    badge: "Our Vision",
    image: "/images/team-5842784_1280.jpg",
    imageAlt: "Investora team building the future of e-commerce"
  }
];
