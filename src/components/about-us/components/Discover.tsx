"use client";
import {
  DiscoverBanner,
  DiscoverBannerMobile,
  RectangleGradient,
  RectangleGradientMobile,
} from "../../../icons/about-us";
import { ArrowRightIcon } from "../../../icons";
import React, { useState, useEffect } from "react";

const Discover = (props) => {
  return (
    <>
      {props.matches ? (
        <div className="relative flex flex-row justify-between items-center gap-[173px] rounded-3xl background-gray max-w-[1200px]">
          <RectangleGradient />
          <div className="flex flex-row justify-between items-start gap-6 w-full px-[39px] py-10 absolute">
            <div className="flex flex-col items-start gap-6 max-w-[547px]">
              <div className="flex flex-col items-start gap-4">
                <span className="text-heading text-[40px]">
                  Together, Build an Innovative Cross-Chain Protocol
                  Community
                </span>
                <span className="text-normal text-base">
                  Engage with developers, experts, researchers, and investors 
                  to exchange ideas, mechanisms and designs to contribute to 
                  the advancement of Blockchain Interoperability.
                </span>
                <a href="https://t.me/+fTOlaBoXef04YjFl" target="_blank">
                  <div className="flex flex-row items-start">
                    <div className="box-border flex flex-row justify-center items-center py-[14px] gap-[10px] h-12 min-w-[120px] rounded-lg text-heading text-xs">
                      <div className="border-gradient p-[2px] h-12 w-full rounded-lg">
                        <div className=" h-full w-full bg-[#0E0C15] py-[14px] px-5 rounded-lg uppercase cursor-pointer	gap-[6px] flex flex-row justify-center items-center">
                          JOIN NOW
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <DiscoverBanner />
          </div>
        </div>
      ) : (
        <div className="relative flex flex-col items-start background-gray">
          <RectangleGradientMobile />
          <div className="absolute flex flex-col px-6 py-[40px] gap-6">
            <DiscoverBannerMobile />
            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-4">
                <span className="text-heading text-2xl">
                  Together, Build an Innovative Cross-Chain Protocol
                  Community
                </span>
                <span className="text-normal text-base">
                  Engage with developers, experts, researchers, and investors 
                  to exchange ideas, mechanisms and designs to contribute to 
                  the advancement of Blockchain Interoperability.
                </span>
              </div>
            </div>
            <a href="https://t.me/+fTOlaBoXef04YjFl" target="_blank">
              <div className="flex flex-row items-start">
                <div className="box-border flex flex-row justify-center items-center py-[14px] gap-[10px] h-12 min-w-[120px] rounded-lg text-heading text-xs">
                  <div className="border-gradient p-[2px] h-12 w-full rounded-lg">
                    <div className=" h-full w-full bg-[#0E0C15] py-[14px] px-5 rounded-lg uppercase cursor-pointer	gap-[6px] flex flex-row justify-center items-center">
                      Join Now
                      <ArrowRightIcon />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Discover;
