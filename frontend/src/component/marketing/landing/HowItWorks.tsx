'use client'

import Image from 'next/image'
import { useState } from "react";



export const HowItWorks = () => {

    const [activeTab, setActiveTab] = useState(0);

    const steps = [
        {
            id: 0,
            title: "Upload documents",
            description: "Upload your documents in seconds. Support for PDF, Word, PowerPoint and more.",
            image: "/upload-file-ellty.png"
        },
        {
            id: 1,
            title: "Set up sharing",
            description: "Customize your sharing link with full control over access and visibility.",
            image: "/link-settings-ellty.png"
        },
        {
            id: 2,
            title: "Track engagement",
            description: "Track page-by-page interest to respond with the right message at the right time.",
            image: "/howitworks-track.png"
        }
    ];

    return (
        <section className="py-2 px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* tabs */}
                <div className="flex justify-center gap-4 mb-8  border-gray-200">
                    {steps.map((step) => (
                        <button key={step.id} onClick={() => setActiveTab(step.id)}
                            className={`pb-4 px-4 text-lg font-medium transition-all relative ${activeTab === step.id ? 'text-black' : 'text-gray-500'} `}
                        >
                            {step.title}
                            {activeTab === step.id && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
                            )}

                        </button>
                    ))}

                </div>

                {/* description */}
                <p className="text-center text-lg text-black mb-8">
                    {steps[activeTab].description}
                </p>

                {/* Visual/Screenshot */}
                <div className="relative w-full h-[600px] rounded-lg overflow-hidden ">
                    <Image
                        src={steps[activeTab].image}
                        alt={steps[activeTab].title}
                        fill
                        className="object-contain"
                    />
                </div>

            </div>
        </section>
    )
}