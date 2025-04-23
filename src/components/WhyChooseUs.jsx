import React from "react";
import { ShieldCheck, Truck, ThumbsUp, Star } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-lime-500" />,
    title: "Premium Quality",
    desc: "We provide only top-quality, reliable sports equipment that professionals trust.",
  },
  {
    icon: <Truck className="w-8 h-8 text-lime-500" />,
    title: "Fast Delivery",
    desc: "Get your gear delivered quickly and safely with our fast delivery service.",
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-lime-500" />,
    title: "Trusted by Players",
    desc: "Over 10,000 satisfied customers and top-rated coaches choose Sportdox.",
  },
  {
    icon: <Star className="w-8 h-8 text-lime-500" />,
    title: "Great Support",
    desc: "We’re here to help! Our support team is always ready to assist you.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="my-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Why Choose Sportdox?</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-10">
        Discover what makes us different from others in the market
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition text-left"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
