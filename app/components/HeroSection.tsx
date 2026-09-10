"use client";

import React from "react";
import Link from "next/link";
import { Globe, ShieldCheck, Sparkles, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-14 md:pt-20 md:pb-20 bg-gradient-to-b from-white via-[#FAFAFB] to-[#EDEDF0] overflow-hidden">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-[#8C8889]/15 via-[#CFCFD3]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Global Center Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CFCFD3]/25 border border-[#8C8889]/40 text-[#000000] text-xs md:text-sm font-semibold mb-6 shadow-sm">
          <Globe className="w-4 h-4 text-[#000000]" />
          <span>Dr Sahni&apos;s Dental Clinic • Global Center of Dental Excellence</span>
        </div>

        {/* Big Impact Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-[#000000] tracking-tight leading-[1.1] max-w-5xl mx-auto">
          Exceptional Dentistry. <br className="hidden sm:inline" />
          Personalised Care. <br className="hidden sm:inline" />
          <span className="font-serif-quote italic text-[#8C8889] font-normal">
            Trusted Beyond Borders.
          </span>
        </h1>

        {/* Subtitle & Description */}
        <div className="mt-6 max-w-3xl mx-auto space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[#000000] tracking-tight">
            World-Class Dentistry, With a Personal Touch
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B70] font-normal leading-relaxed">
            Specialist-led aesthetic dentistry, advanced implantology, and bespoke smile transformations at <strong>Dr Sahni&apos;s</strong>, tailored to discerning patients worldwide. Rooted in artistic precision and clinical mastery.
          </p>
        </div>

        {/* Primary CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#book-appointment"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base sm:text-lg font-bold text-white bg-[#000000] hover:bg-[#1A1A1D] shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-200 border border-black"
          >
            Schedule Consultation
          </Link>

          <Link
            href="#treatments"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base sm:text-lg font-bold text-[#000000] bg-white border border-[#CFCFD3] shadow-sm hover:border-[#8C8889] hover:bg-[#FAFAFB] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            Explore Treatments
          </Link>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 pt-8 border-t border-[#CFCFD3]/60">
          <p className="text-xs font-bold text-[#8C8889] uppercase tracking-[0.25em] mb-4">
            Trusted By Patients Worldwide · International Concierge
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {/* 30+ Nations */}
            <div className="flex flex-col items-center justify-center text-center p-3.5 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#CFCFD3]/60 shadow-sm">
              <Globe className="w-5 h-5 text-[#000000] mb-1" />
              <span className="text-sm font-bold text-[#000000]">Patients from 30+ Nations</span>
              <span className="text-xs text-[#8C8889]">Global dental tourism</span>
            </div>

            {/* ISO Accredited */}
            <div className="flex flex-col items-center justify-center text-center p-3.5 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#CFCFD3]/60 shadow-sm">
              <Award className="w-5 h-5 text-[#8C8889] mb-1" />
              <span className="text-sm font-bold text-[#000000]">ISO 9001:2015 Accredited</span>
              <span className="text-xs text-[#8C8889]">International quality standards</span>
            </div>

            {/* Digital Guided Surgery */}
            <div className="flex flex-col items-center justify-center text-center p-3.5 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#CFCFD3]/60 shadow-sm">
              <Sparkles className="w-5 h-5 text-[#000000] mb-1" />
              <span className="text-sm font-bold text-[#000000]">Digital Guided Surgery</span>
              <span className="text-xs text-[#8C8889]">3D CT computer precision</span>
            </div>

            {/* 100% Sterile */}
            <div className="flex flex-col items-center justify-center text-center p-3.5 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#CFCFD3]/60 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#8C8889] mb-1" />
              <span className="text-sm font-bold text-[#000000]">100% Sterile & Safe</span>
              <span className="text-xs text-[#8C8889]">Hospital-grade disinfection</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
