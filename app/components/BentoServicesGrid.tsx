"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function BentoServicesGrid() {
  return (
    <section id="treatments" className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CFCFD3]/25 border border-[#8C8889]/30 text-[#000000] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#000000]" />
            Specialist-Led Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#000000]">
            Dental Treatments We&apos;re Known For at Dr Sahni&apos;s
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6B6B70]">
            Explore the treatments that make Dr Sahni&apos;s Dental Clinic a trusted destination for advanced implantology, Invisalign clear aligners, bespoke smile architecture, and restorative excellence.
          </p>
        </div>
        <Link
          href="#book-appointment"
          className="hidden md:inline-flex items-center gap-1.5 text-sm font-bold text-[#000000] hover:text-[#8C8889] transition-colors"
        >
          Book Consultation &rarr;
        </Link>
      </div>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        
        {/* Card 1: Cosmetic Dentistry (Midnight Mist with silver organic wave) */}
        <Link
          href="#cosmetic-dentistry"
          className="group relative h-72 sm:h-80 rounded-[28px] p-6 flex flex-col justify-between overflow-hidden bg-[#000000] text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-neutral-800"
        >
          <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full bg-[#8C8889]/20 blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          <svg
            className="absolute bottom-0 left-0 w-full opacity-30 group-hover:opacity-50 transition-opacity"
            viewBox="0 0 200 120"
            fill="none"
          >
            <path
              d="M-20,90 Q40,30 90,80 T220,50 L220,150 L-20,150 Z"
              fill="#27272A"
            />
          </svg>

          <div className="relative z-10 flex justify-between items-start">
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight max-w-[180px]">
              Cosmetic Dentistry
            </h3>
            <span className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-[#000000] transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </div>

          <div className="relative z-10">
            <p className="text-xs text-[#CFCFD3] font-medium">
              Veneers, teeth whitening, and complete smile makeovers
            </p>
          </div>
        </Link>

        {/* Card 2: Dental Implants (Photo card) */}
        <Link
          href="#treatments"
          className="group relative h-72 sm:h-80 rounded-[28px] p-6 flex flex-col justify-between overflow-hidden text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-neutral-800"
        >
          <Image
            src="/images/treatment-room.jpg"
            alt="Dental Implants and Guided Surgery at Dr Sahni Clinic"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

          <div className="relative z-10 flex justify-between items-start">
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight max-w-[180px] drop-shadow-md">
              Dental Implants
            </h3>
            <span className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-[#000000] transition-all border border-white/10">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </div>

          <div className="relative z-10">
            <p className="text-xs text-[#CFCFD3] font-medium drop-shadow-sm">
              All-on-4, single tooth, and full-arch permanent replacements
            </p>
          </div>
        </Link>

        {/* Column 3: Stacked 2 Cards (MicroEndodontics + Orthodontics) */}
        <div className="flex flex-col gap-4 md:gap-5 h-full">
          {/* Microscopic Endodontics (Silver Slate card) */}
          <div className="relative h-32 sm:h-36 rounded-[24px] p-5 flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#8C8889] to-[#6E6B6C] text-white shadow-sm border border-neutral-400/30">
            <svg
              className="absolute -right-4 -bottom-4 w-36 h-36 opacity-25"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <circle cx="50" cy="50" r="40" />
            </svg>
            <div className="relative z-10">
              <span className="text-xs uppercase tracking-widest font-semibold text-white/80">
                Microscopic Care
              </span>
              <p className="text-base font-bold text-white mt-1">
                Painless Root Canals
              </p>
              <span className="text-[11px] text-white/90">Single-sitting precision</span>
            </div>
          </div>

          {/* Orthodontics 3D Scanning Photo */}
          <Link
            href="#invisalign"
            className="group relative flex-1 min-h-[160px] rounded-[24px] p-5 flex flex-col justify-between overflow-hidden text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-neutral-800"
          >
            <Image
              src="/images/invisalign-aligner.jpg"
              alt="Orthodontics & Invisalign Clear Aligners"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.75]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

            <div className="relative z-10 flex justify-between items-start">
              <h3 className="text-xl sm:text-2xl font-bold leading-tight drop-shadow-md">
                Orthodontics
              </h3>
              <span className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-[#000000] transition-all border border-white/10">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>

            <div className="relative z-10">
              <p className="text-xs text-[#CFCFD3] font-medium drop-shadow-sm">
                Invisalign® and clear aligners for straight teeth
              </p>
            </div>
          </Link>
        </div>

        {/* Column 4: Cosmetic Dentistry Smile & General Care */}
        <div className="flex flex-col gap-4 md:gap-5 h-full">
          {/* Cosmetic Dentistry photo */}
          <Link
            href="#cosmetic-dentistry"
            className="group relative flex-1 min-h-[160px] rounded-[24px] p-5 flex flex-col justify-between overflow-hidden text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-neutral-800"
          >
            <Image
              src="/images/cosmetic-smile.jpg"
              alt="Smile Transformations at Dr Sahni Clinic"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.8]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="relative z-10 flex justify-between items-start">
              <h3 className="text-xl sm:text-2xl font-bold leading-tight drop-shadow-md">
                Smile Makeovers
              </h3>
              <span className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-[#000000] transition-all border border-white/10">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>

            <div className="relative z-10">
              <p className="text-xs text-[#CFCFD3] font-medium drop-shadow-sm">
                Bespoke porcelain veneers & aesthetic crowns
              </p>
            </div>
          </Link>

          {/* General Care Card (Midnight Mist noir card) */}
          <Link
            href="#preventive-care"
            className="group relative h-32 sm:h-36 rounded-[24px] p-5 flex flex-col justify-between overflow-hidden bg-[#18181B] text-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-neutral-800"
          >
            <div className="relative z-10 flex justify-between items-start">
              <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                General Care
              </h3>
              <span className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-[#000000] transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>

            <div className="relative z-10">
              <p className="text-xs text-[#CFCFD3] font-medium">
                Comprehensive checkups, cleanings, and laser gum therapy
              </p>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
