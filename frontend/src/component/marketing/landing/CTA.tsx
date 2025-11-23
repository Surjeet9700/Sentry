'use client'

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MoveRight } from 'lucide-react';

export default function CTA() {
    const [activeTab, setActiveTab] = useState(0);

    const steps = [
        {
            id: 0,
            tabLabel: "Fundraising",
            title: "For founders and investors.",
            desc: "Manage fundraising from both sides. Share decks, track investor interest, run due diligence, and distribute portfolio updates with complete visibility and control.",
            image: '/solutions.png'
        },
        {
            id: 1,
            tabLabel: "Deal Making",
            title: "Close deals faster",
            desc: "Manage M&A documents, run streamlined due diligence processes, and track buyer engagement in real-time with enterprise-grade security and analytics.",
            image: '/startup-2.png'
        }
    ]

    return (
        <section className="py-20 px-8 bg-white">
            {/* Header */}
            <div className="text-center mb-12 max-w-4xl mx-auto">
                <h2 className="text-5xl font-normal tracking-tight mb-4">
                    Fundraising and dealmaking platform
                </h2>
                <p className="text-xl text-black">
                    Secure sharing and document analytics for fundraising, deals, and client work.
                </p>
            </div>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto">
                {/* Split Layout: Text LEFT + Image RIGHT */}
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content with Tabs */}
                    <div className="space-y-8">
                        {/* Tab Navigation - Inside Left Column */}
                        <div className="flex justify-start gap-8 ">
                            {steps.map((step) => (
                                <button
                                    key={step.id}
                                    onClick={() => setActiveTab(step.id)}
                                    className={`pb-4 text-lg font-normal transition-all relative ${activeTab === step.id ? 'text-black' : 'text-gray-500'
                                        }`}
                                >
                                    {step.tabLabel}
                                    {activeTab === step.id && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Text Content */}
                        <div className="space-y-6 ">
                            <h3 className="text-4xl font-normal leading-tight">
                                {steps[activeTab].title}
                            </h3>

                            <p className="text-lg text-black text-wrap  leading-tight">
                                {steps[activeTab].desc}
                            </p>

                            <Link href="/pricing">
                                <Button variant="link" className="text-lg font-semibold p-0 h-auto flex text-start gap-2">
                                    Explore plans
                                    <MoveRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
                        <Image
                            src={steps[activeTab].image}
                            alt={steps[activeTab].title}
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>
            </div>

            <section className="bg-purple-100 rounded-2xl mx-4 md:mx-8 mt-32">
                <div className="grid lg:grid-cols-[2fr_1fr] gap-0 min-h-[100px] md:min-h-[200px] lg:min-h-[250px]
">
                    {/* Left Column - Text Content */}
                    <div className="flex flex-col items-center lg:items-start  justify-center p-8 md:p-12 lg:p-16 space-y-4 md:space-y-6">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-normal leading-tight text-gray-900">
                            Join teams already sharing smarter
                        </h3>
                        <p className="text-base md:text-lg tracking-tighter text-gray-700 leading-relaxed max-w-none md:max-w-md lg:max-w-lg">
                            From early-stage startups to growing companies, teams use Ellty to
                            understand document engagement. Stop sending files blind - see who's
                            interested, what resonates, and when to follow up.
                        </p>
                        <div className="pt-2">
                            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-normal text-sm md:text-base">
                                Get started today
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Image with Docs Overlay */}
                    <div className="relative hidden lg:flex items-center justify-center p-2 md:p-4 lg:p-8">
                        {/* Main Image Container */}
                        <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-lg aspect-square">
                            <Image
                                src="/ellty-cta1-1.png"
                                alt="Person using Ellty platform"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </section>
    )
}