import React from 'react';
import { Plane, CreditCard, RefreshCw, Trophy, Gem } from 'lucide-react'; 



const FeaturesSection = () => {
    const features = [
        {
            icon: <Plane size={40} className="text-lime-600" />,
            title: "Free Delivery",
            description: "We’ll even bring it into your home for free*.",
        },
        {
            icon: <CreditCard size={40} className="text-lime-600" />,
            title: "Special Financing",
            description: "Up to 24 Months. Apply for an Appliances Connection.",
        },
        {
            icon: <RefreshCw size={40} className="text-lime-600" />,
            title: "30 Day Returns",
            description: "Return your items for free* within 30 Days of purchase.",
        },
        {
            icon: <Trophy size={40} className="text-lime-600" />,
            title: "Rewards Program",
            description: "Join our loyalty program and earn money by shopping with us.",
        },
        {
            icon: <Gem size={40} className="text-lime-600" />,
            title: "Trade Program",
            description: "We offer exclusive pricing and resources to registered.",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-6 py-10 bg-white">
            
            {features.map((feature, index) => (
                <div key={index} className="text-center border-r last:border-none px-4">
                    <div className="flex justify-center mb-3">
                        {feature.icon}
                    </div>
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
            ))}
           
        </div>
    );
};

export default FeaturesSection;
