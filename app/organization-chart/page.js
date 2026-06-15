"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Crown,
  Briefcase,
  Users,
  Calculator,
  Code,
  GraduationCap,
  Cog,
  Building2,
  Flag,
  Sparkles,
  Leaf,
  ShieldCheck,
  Landmark,
  TrendingUp,
  Globe,
  Server,
  SlashIcon,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function OrganizationChart() {  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      // Center the scroll position
      container.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, []);

  return (
    <div className="relative">
      <BreadcrumbContent />
      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-12 pt-12 pb-2 md:pb-5">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="font-playfair tracking-tight text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 drop-shadow-lg mb-2 sm:mb-3">
            Organization Chart
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-geist text-neutral-600 max-w-xs sm:max-w-md md:max-w-xl mx-auto px-4 sm:px-2 md:px-0">
            Our organizational structure showing hierarchy and team distribution
            across departments.
          </p>
        </div>

        {/* Outer wrapper with certificate-style design */}
        <div className="w-full rounded-3xl border border-neutral-200 bg-neutral-100 p-2">
          <div
            ref={scrollContainerRef}
            className="w-full overflow-x-auto scrollbar-hide pt-12 pb-14 shadow-input rounded-2xl bg-white"
          >
            <div className="flex flex-col items-center w-full min-w-[2000px]">
              {/* Root: DIRECTOR */}
              <div className="relative flex flex-col items-center">
                <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center">
                  <div className="flex items-center gap-2 text-center font-geist text-xs md:text-sm uppercase text-neutral-800 font-medium">
                    <Crown
                      className="w-4 h-4 text-neutral-700"
                      aria-hidden="true"
                    />
                    <span>Director</span>
                  </div>
                </div>

                {/* Connector: Director to CEO */}
                <div className="w-[2px] h-8 bg-neutral-200" />
              </div>

              {/* Level 2: CEO */}
              <div className="relative flex flex-col items-center">
                <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center">
                  <div className="flex items-center gap-2 text-center font-geist text-xs md:text-sm uppercase text-neutral-800 font-medium">
                    <Briefcase
                      className="w-4 h-4 text-neutral-700"
                      aria-hidden="true"
                    />
                    <span>CEO</span>
                  </div>
                </div>

                {/* Vertical Connector below CEO */}
                <div className="w-[2px] h-8 bg-neutral-200" />
              </div>

              {/* Level 3 branches */}
              <div className="relative w-full max-w-[1550px]">
                {/* Horizontal bar connecting branches */}
                <div className="absolute top-0 left-[12.5%] right-[12.5%] h-[2px] bg-neutral-200" />

                <div className="flex justify-between w-full pt-8">
                  {/* Branch 1: HR. DEPT. (2) */}
                  <div className="flex flex-col items-center w-1/4 relative">
                    <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                    <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                      <div className="flex items-center gap-2 text-center font-geist text-xs md:text-sm uppercase text-neutral-800 font-medium">
                        <Users
                          className="w-4 h-4 text-neutral-700"
                          aria-hidden="true"
                        />
                        <span>HR. DEPT. (2)</span>
                      </div>
                    </div>
                  </div>

                  {/* Branch 2: HEAD OPERATIONS */}
                  <div className="flex flex-col items-center w-1/4 relative">
                    <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                    <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                      <div className="flex items-center gap-2 text-center font-geist text-xs md:text-sm uppercase text-neutral-800 font-medium">
                        <Cog
                          className="w-4 h-4 text-neutral-700"
                          aria-hidden="true"
                        />
                        <span>Head Operations</span>
                      </div>
                    </div>

                    {/* Vertical Connector below Head Operations */}
                    <div className="w-[2px] h-28 bg-neutral-200" />

                    {/* Sub-level under Head Operations */}
                    <div className="relative w-full min-w-[800px]">
                      {/* Horizontal bar connecting sub-branches */}
                      <div className="absolute top-0 left-[16.67%] right-[16.67%] h-[2px] bg-neutral-200" />

                      <div className="flex justify-evenly w-full pt-8">
                        {/* Sub-branch 1: FMCS Manager */}
                        <div className="flex flex-col items-center w-1/3 relative">
                          <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                          <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                            <div className="flex items-center gap-2 text-center font-geist text-xs md:text-sm uppercase text-neutral-800 font-medium">
                              <Building2
                                className="w-4 h-4 text-neutral-700"
                                aria-hidden="true"
                              />
                              <span>FMCS Manager</span>
                            </div>
                          </div>

                          {/* Vertical Connector below FMCS Manager */}
                          <div className="w-[2px] h-10 bg-neutral-200" />

                          {/* Sub-level under FMCS Manager */}
                          <div className="flex flex-col items-center relative">
                            <div className="absolute top-[-16px] w-[2px] h-4 bg-neutral-200" />
                            <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                              <div className="flex items-center gap-2 text-center font-geist text-xs md:text-sm uppercase text-neutral-800 font-medium">
                                <Users
                                  className="w-4 h-4 text-neutral-700"
                                  aria-hidden="true"
                                />
                                <span>FMCS Team (10)</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Sub-branch 2: Indian BIS Manager */}
                        <div className="flex flex-col items-center w-1/3 relative">
                          <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                          <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                            <div className="flex items-center gap-2 text-center font-geist text-xs md:text-sm uppercase text-neutral-800 font-medium">
                              <Flag
                                className="w-4 h-4 text-neutral-700"
                                aria-hidden="true"
                              />
                              <span>Indian BIS Manager</span>
                            </div>
                          </div>

                          {/* Vertical Connector below Indian BIS Manager */}
                          <div className="w-[2px] h-10 bg-neutral-200" />

                          {/* Sub-level under Indian BIS Manager */}
                          <div className="flex flex-col items-center relative">
                            <div className="absolute top-[-16px] w-[2px] h-4 bg-neutral-200" />
                            <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                              <div className="flex items-center gap-2 text-center font-geist text-xs md:text-sm uppercase text-neutral-800 font-medium">
                                <Users
                                  className="w-4 h-4 text-neutral-700"
                                  aria-hidden="true"
                                />
                                <span>Indian BIS Team (4)</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Sub-branch 3: General Service Manager */}
                        <div className="flex flex-col items-center w-1/3 relative">
                          <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                          <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                            <div className="flex items-center gap-2 text-center font-geist text-xs md:text-sm uppercase text-neutral-800 font-medium">
                              <Cog
                                className="w-4 h-4 text-neutral-700"
                                aria-hidden="true"
                              />
                              <span>General Service Manager</span>
                            </div>
                          </div>

                          {/* Vertical Connector below General Service Manager */}
                          <div className="w-[2px] h-28 bg-neutral-200" />

                          {/* Sub-level under General Service Manager */}
                          <div className="relative w-full min-w-[800px]">
                            {/* Horizontal bar connecting sub-services */}
                            <div className="absolute top-0 left-[12.5%] right-[12.5%] h-[2px] bg-neutral-200" />

                            <div className="flex justify-between w-full pt-8">
                              {/* LMPC (2) */}
                              <div className="flex flex-col items-center w-1/4 relative">
                                <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                                <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                                  <div className="flex items-center gap-2 text-center font-geist text-xs md:text-sm uppercase text-neutral-800 font-medium">
                                    <Landmark
                                      className="w-4 h-4 text-neutral-700"
                                      aria-hidden="true"
                                    />
                                    <span>LMPC (2)</span>
                                  </div>
                                </div>
                              </div>

                              {/* EPR (2) */}
                              <div className="flex flex-col items-center w-1/4 relative">
                                <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                                <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                                  <div className="flex items-center gap-2 text-center font-geist text-xs md:text-sm uppercase text-neutral-800 font-medium">
                                    <Leaf
                                      className="w-4 h-4 text-neutral-700"
                                      aria-hidden="true"
                                    />
                                    <span>EPR (2)</span>
                                  </div>
                                </div>
                              </div>

                              {/* PESO (4) */}
                              <div className="flex flex-col items-center w-1/4 relative">
                                <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                                <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                                  <div className="flex items-center gap-2 text-center font-geist text-xs md:text-sm uppercase text-neutral-800 font-medium">
                                    <ShieldCheck
                                      className="w-4 h-4 text-neutral-700"
                                      aria-hidden="true"
                                    />
                                    <span>PESO (4)</span>
                                  </div>
                                </div>
                              </div>

                              {/* Other Services (2) */}
                              <div className="flex flex-col items-center w-1/4 relative">
                                <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                                <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                                  <div className="flex items-center gap-2 text-center font-geist text-xs md:text-sm uppercase text-neutral-800 font-medium">
                                    <Sparkles
                                      className="w-4 h-4 text-neutral-700"
                                      aria-hidden="true"
                                    />
                                    <span>Other Services (2)</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Branch 3: ACCOUNT MANAGER */}
                  <div className="flex flex-col items-center w-1/4 relative">
                    <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                    <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                      <div className="flex items-center gap-2 text-center font-geist text-xs md:text-sm uppercase text-neutral-800 font-medium">
                        <Calculator
                          className="w-4 h-4 text-neutral-700"
                          aria-hidden="true"
                        />
                        <span>Account Manager</span>
                      </div>
                    </div>

                    {/* Vertical Connector below Account Manager */}
                    <div className="w-[2px] bg-neutral-200" />

                    {/* Sub-level under Account Manager */}
                    <div className="relative w-full min-w-[200px]">
                      <div className="flex justify-center w-full pt-8">
                        {/* Sub-branch: Accounts Dept (2) */}
                        <div className="flex flex-col items-center relative">
                          <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                          <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                            <div className="flex items-center gap-2 text-center font-geist text-xs md:text-sm uppercase text-neutral-800 font-medium">
                              <Calculator
                                className="w-4 h-4 text-neutral-700"
                                aria-hidden="true"
                              />
                              <span>Accounts Dept (2)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Branch 4: CTO */}
                  <div className="flex flex-col items-center w-1/4 relative">
                    <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                    <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                      <div className="flex items-center gap-2 text-center font-geist text-xs md:text-sm uppercase text-neutral-800 font-medium">
                        <Code
                          className="w-4 h-4 text-neutral-700"
                          aria-hidden="true"
                        />
                        <span>CTO</span>
                      </div>
                    </div>

                    {/* Vertical Connector below CTO */}
                    <div className="w-[2px] h-28 bg-neutral-200" />

                    {/* Sub-level under CTO */}
                    <div className="relative w-full min-w-[850px]">
                      {/* Horizontal bar connecting sub-teams */}
                      <div className="absolute top-0 left-[12.5%] right-[12.5%] h-[2px] bg-neutral-200" />

                      <div className="flex justify-between w-full pt-8">
                        {/* Engineering Team for R & D (5) */}
                        <div className="flex flex-col items-center w-1/4 relative">
                          <div className="absolute top-[-32px] w-[2px] h-[112px] bg-neutral-200" />
                          <div className="px-4 py-2 bg-neutral-100 border-2 mt-[80px] border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                            <div className="flex items-center gap-2 text-center font-geist text-xs md:text-sm uppercase text-neutral-800 font-medium">
                              <GraduationCap
                                className="w-4 h-4 text-neutral-700"
                                aria-hidden="true"
                              />
                              <span>Engineering Team for R & D (5)</span>
                            </div>
                          </div>
                        </div>

                        {/* Business Development Team (5) */}
                        <div className="flex flex-col items-center w-1/4 relative">
                          <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                          <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                            <div className="flex items-center gap-2 text-center font-geist text-xs md:text-sm uppercase text-neutral-800 font-medium">
                              <TrendingUp
                                className="w-4 h-4 text-neutral-700"
                                aria-hidden="true"
                              />
                              <span>Business Development Team (5)</span>
                            </div>
                          </div>
                        </div>

                        {/* Web Development Team (2) */}
                        <div className="flex flex-col items-center w-1/4 relative">
                          <div className="absolute top-[-32px] w-[2px] h-[112px] bg-neutral-200" />
                          <div className="px-4 py-2 bg-neutral-100 border-2 mt-[80px] border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                            <div className="flex items-center gap-2 text-center font-geist text-xs md:text-sm uppercase text-neutral-800 font-medium">
                              <Globe
                                className="w-4 h-4 text-neutral-700"
                                aria-hidden="true"
                              />
                              <span>Web Development Team (2)</span>
                            </div>
                          </div>
                        </div>

                        {/* IT Dept. (2) */}
                        <div className="flex flex-col items-center w-1/4 relative">
                          <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                          <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                            <div className="flex items-center gap-2 text-center font-geist text-xs md:text-sm uppercase text-neutral-800 font-medium">
                              <Server
                                className="w-4 h-4 text-neutral-700"
                                aria-hidden="true"
                              />
                              <span>IT Dept. (2)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BreadcrumbContent() {
  return (
    <div className="absolute top-3 md:top-5 left-0 w-full z-30">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 md:px-12">
        <div className="w-full overflow-x-auto scrollbar-hide">
          <Breadcrumb>
            <BreadcrumbList className="flex-nowrap font-geist">
              <BreadcrumbItem className="flex-shrink-0">
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="flex-shrink-0">
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem className="flex-shrink-0">
                <BreadcrumbPage className="whitespace-nowrap">
                  Organization Chart
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
}
