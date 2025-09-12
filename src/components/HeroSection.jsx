"use client";
import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import RevealAnimation from "./RevealAnimation";
import Loader from "./Loader";
import Image from "next/image";
import {
  BoltIcon,
  BanknotesIcon,
  ClockIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadComplete = () => {
    setIsLoading(false);
    // Add a small delay before showing content with reveal animations
    setTimeout(() => setShowContent(true), 50);
  };
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {isLoading && <Loader onLoadComplete={handleLoadComplete} />}
      {showContent && (
        <section
          id="hero"
          className="text-black pt-20 pb-16 relative overflow-x-hidden w-full"
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/bg2.jpg"
              alt="Hero Background"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="relative z-10 ">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <RevealAnimation direction="left">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                       Dynamic HRMS{" "}
                      <span style={{ color: "#a89456" }}>customizable</span> for
                      your <span style={{ color: "#a89456" }}>needs</span>.
                    </h1>
                  </RevealAnimation>
                  <RevealAnimation direction="left" delay={0.2}>
                    <p className="text-xl text-black text-opacity-90 leading-relaxed">
                      Manage employees, payroll, attendance, and performance all
                      in one powerful platform. Boost productivity and reduce
                      administrative overhead with our intuitive HR management
                      system.
                    </p>
                  </RevealAnimation>
                  <RevealAnimation direction="left" delay={0.4}>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={scrollToFeatures}
                        className="text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                        style={{ backgroundColor: "#111826" }}
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          Let's Explore
                          <span className="ml-2 flex space-x-1">
                            <span
                              className="w-1 h-1 bg-white rounded-full animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            ></span>
                            <span
                              className="w-1 h-1 bg-white rounded-full animate-bounce"
                              style={{ animationDelay: "150ms" }}
                            ></span>
                            <span
                              className="w-1 h-1 bg-white rounded-full animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            ></span>
                          </span>
                        </span>
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: "#a89456" }}
                        ></div>
                      </button>
                    </div>
                  </RevealAnimation>
                </div>
                <div className="flex  justify-center">
                  <RevealAnimation direction="right">
                    <div className=" bg-opacity-10 backdrop-blur-sm rounded-xl h-120 w-full flex items-center justify-center">
                      <DotLottieReact
                        src="https://lottie.host/b54a556b-c540-48df-b70c-fc9d08d911c9/miioGUaqcU.lottie"
                        loop
                        autoplay
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </RevealAnimation>
                </div>
                {/* Stats Section */}
              </div>
            </div>
            <RevealAnimation>
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
                {/* Stats Section */}
                <div className="bg-[#f6f8fc] p-12 rounded-3xl border border-gray-100 shadow-xl">
                  <div className="text-center mb-12">
                    <h3 className="text-4xl font-bold text-black mb-4">
                      ⚡ Powerful Performance Metrics
                    </h3>
                    <p className="text-[#a89456] text-lg max-w-2xl mx-auto font-medium">
                      Experience the revolutionary transformation through our
                      interconnected ecosystem.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        value: "10x",
                        label: "Faster Processing",
                        icon: BoltIcon,
                        color: "#a89456",
                      },
                      {
                        value: "50%",
                        label: "Cost Reduction",
                        icon: BanknotesIcon,
                        color: "#a89456",
                      },
                      {
                        value: "99.9%",
                        label: "Uptime Guarantee",
                        icon: ShieldCheckIcon,
                        color: "#a89456",
                      },
                      {
                        value: "24/7",
                        label: "Real-time Support",
                        icon: ClockIcon,
                        color: "#a89456",
                      },
                    ].map((stat, index) => {
                      const IconComponent = stat.icon;
                      return (
                        <RevealAnimation key={index} delay={index * 0.1}>
                          <div className="text-center group">
                            <div className="bg-white p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-200 relative overflow-hidden shadow-lg">
                              <div
                                className="absolute inset-0 opacity-5"
                                style={{
                                  background: `radial-gradient(circle, ${stat.color}40 0%, transparent 70%)`,
                                }}
                              ></div>

                              <div className="relative z-10">
                                <div className="w-16 h-16 mx-auto mb-4 bg-[#a89456] rounded-full flex items-center justify-center">
                                  <IconComponent className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-4xl font-bold text-black mb-2">
                                  {stat.value}
                                </div>
                                <div className="text-[#a89456] text-sm font-medium">
                                  {stat.label}
                                </div>
                              </div>
                            </div>
                          </div>
                        </RevealAnimation>
                      );
                    })}
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </section>
      )}
    </>
  );
};

export default HeroSection;
