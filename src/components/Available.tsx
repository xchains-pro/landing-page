import { EthereumBorder } from "../icons/avaiable";
import { EthereumLogo, BSCLogo} from "../icons/chain";

const Available = (props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-[80px] pb-[80px] md:pt-[120px] md:pb-[120px] gap-[56px]">
        <div className="justify-center items-center text-center">
          <p className="text-heading text-[34px] md:text-[48px]">Available on</p>
          <p className="text-[22px] md:text-[34px]" style={{color: 'gray'}}>The most widely used blockchains</p>
        </div>
      
        <div className="available-on-items flex flex-wrap flex-row justify-center md:justify-between items-start gap-8 max-w-[584px]">
          <div className="relative box-border flex flex-col items-center justify-center rounded-3xl gap-[26px] w-[143px] h-[169px]">
            <EthereumBorder />
            <div className="absolute flex flex-col items-center justify-center w-full h-full gap-[26px]">
              <a href="https://app.xchains.pro/#/?chain=ethereum" target="_blank">
                <div className="flex flex-col items-center gap-4 max-w-[100px] max-h-[146px]">
                  <EthereumLogo width="100px" height="146px" style={{marginTop: "-1rem"}}/>
                  <p className="text-heading text-xl">Ethereum</p>
                </div>
              </a>
            </div>
          </div>
          <div className="relative box-border flex flex-col items-center justify-center rounded-3xl gap-[26px] w-[143px] h-[169px]">
            <EthereumBorder />
            <div className="absolute flex flex-col items-center justify-center w-full h-full gap-[26px]">
              <a href="https://app.xchains.pro/#/?chain=bsc" target="_blank">
                <div className="flex flex-col items-center gap-4 max-w-[100px] max-h-[146px]">
                  <BSCLogo width="100px" height="146px"  style={{marginTop: "-1rem"}}/>
                  <p className="text-heading text-xl">BSC</p>
                </div>
              </a>
            </div>
          </div>
          <div className="relative box-border flex flex-col items-center justify-center rounded-3xl gap-[26px] w-[143px] h-[169px]">
            <EthereumBorder />
            <div className="absolute flex flex-col items-center justify-center w-full h-full gap-[26px]">
              <div className="flex flex-col items-center text-center items-center gap-4 max-w-[100px] max-h-[146px]">
                <p className="text-heading text-xl">More Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Available;
