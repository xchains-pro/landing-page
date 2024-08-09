"use client";

import React, { useState } from "react";
import { CardBorder, CardBorderHover, ArrowIcon } from "../../../icons";
import useMediaQuery from "../../hooks/useMedia";
import { Link } from "react-router-dom";

const checkIcon = (icon) => {
  switch (icon) {
    case "Effcient":
      return "/fully-onchain.png";
    case "HighResistance":
      return "/high-resistance.png";
    case "RealYield":
      return "/open-clusive.png";
    case "NoLiquidation":
      return "/no-liquidation.png";
    case "InfiniteLiquidity":
      return "/infinite-liquidity.png";
    default:
      return "";
  }
};

const InnovationCard = (item: any) => {
  const [over, setOver] = useState(false);
  const matches = useMediaQuery(768);

  return (
    <div
      className="relative max-w-[277px] h-[336px]"
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
    >
      {over && matches ? <CardBorderHover /> : <CardBorder />}
      <div className="absolute flex flex-col justify-between h-full items-start p-6 gap-6 top-0">
        <div className="flex flex-col gap-6">
          <img
            className="w-[40px] h-[40px]"
            src={checkIcon(item.item.icon)}
            alt=""
          />
          <div className="flex flex-col items-start gap-4">
            <span className="text-heading text-xl">{item.item.title}</span>
            <span className="text-normal text-sm">{item.item.content}</span>
          </div>
        </div>
        <Link
          to={`https://docs.xchains.pro/${item.item.path ?? ""}`}
          target="_blank"
        >
          <div className="flex flex-row items-center gap-2 cursor-pointer">
            <span className="text-heading text-sm text-[#CAC6DD]">
              READ MORE
            </span>
            <ArrowIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InnovationCard;
