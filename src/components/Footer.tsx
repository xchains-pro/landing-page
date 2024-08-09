import { XChainsLogoMini, Ellipse } from "../icons";
import {
  TwitterMini,
  TelegramMini,
  GithubMini,
} from "../icons/socials";
import { Link } from "react-router-dom";

const Footer = () => {
  const iconsArr = [
    {
      icon: <TwitterMini />,
      link: "https://x.com/xchains_pro",
    },
    {
      icon: <TelegramMini />,
      link: "https://t.me/xchains_pro",
    },
    {
      icon: <GithubMini />,
      link: "https://github.com/xchains",
    },
  ];
  return (
    <>
      <div className="footer-border-top flex box-border flex-col justify-center items-center py-8 gap-4 w-full md:mt-[120px] bottom-0 min-h-[164px] z-[9999]">
        <div className="max-w-[133.71px] max-h-6">
          <XChainsLogoMini />
        </div>
        <div className="flex flex-row items-start gap-6 max-w-[264px]">
          {iconsArr.map((item, idx) => (
            <Link key={idx} to={item.link} target="_blank">
              <div className="max-w-6 max-h-6">{item.icon}</div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-normal text-xs">
          <p>Copyright © 2024 XChains. All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
