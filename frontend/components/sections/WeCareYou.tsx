import React from "react";
import { SpotLightCard } from "../SpotLightCard";

const WeCareYou = () => {
  const Steps = [
    {
      title: "Data Encryption",
      description:
        "We use advanced encryption techniques to protect your data both in transit and at rest.",
    },
    {
      title: "Access Control",
      description:
        "Strict access controls ensure that only authorized personnel can access sensitive information.",
    },
    {
      title: "Regular Audits",
      description:
        "We conduct regular security audits and vulnerability assessments to identify and mitigate risks.",
    },
    {
      title: "User Education",
      description:
        "We provide training and resources to help users understand best practices for data security.",
    },
    {
      title: "Incident Response",
      description:
        "In the event of a data breach, we have a robust incident response plan to minimize impact and recover quickly.",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">How We Care You</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <SpotLightCard
          title="Your data protection is our first priority"
          subTitle="How we protect your data: "
          steps={Steps}
          message="We take your data security seriously. Our platform is designed to ensure that your information remains private and secure at all times."
        />
        <SpotLightCard
          title="Your data protection is our first priority"
          subTitle="How we protect your data: "
          steps={Steps}
          message="We take your data security seriously. Our platform is designed to ensure that your information remains private and secure at all times."
        />
        <SpotLightCard
          title="Your data protection is our first priority"
          subTitle="How we protect your data: "
          steps={Steps}
          message="We take your data security seriously. Our platform is designed to ensure that your information remains private and secure at all times."
        />
      </div>
    </div>
  );
};

export default WeCareYou;
