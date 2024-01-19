import React from "react";
import classes from "../../styles/components/BitcoinWallet.module.scss";

const BitcoinWallet = () => {
  return (
    <div className={classes.BitcoinWallet}>
      <div className={classes.BitcoinWallet__content}>
        <div className={classes.top}>
          <div className={classes.left}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="162.5px"
              height="162.5px"
            >
              <defs>
                <linearGradient id="PSgrad_0" x1="0%" x2="0%" y1="100%" y2="0%">
                  <stop
                    offset="0%"
                    stop-color="rgb(255,143,23)"
                    stop-opacity="1"
                  />
                  <stop
                    offset="100%"
                    stop-color="rgb(255,200,67)"
                    stop-opacity="1"
                  />
                </linearGradient>
              </defs>
              <path
                fill-rule="evenodd"
                fill="rgb(250, 156, 33)"
                d="M80.1000,0.687 C125.286,0.687 161.187,36.602 161.187,80.906 C161.187,125.210 125.286,161.125 80.1000,161.125 C36.714,161.125 0.812,125.210 0.812,80.906 C0.812,36.602 36.714,0.687 80.1000,0.687 Z"
              />
              <path
                fill="url(#PSgrad_0)"
                d="M80.1000,0.687 C125.286,0.687 161.187,36.602 161.187,80.906 C161.187,125.210 125.286,161.125 80.1000,161.125 C36.714,161.125 0.812,125.210 0.812,80.906 C0.812,36.602 36.714,0.687 80.1000,0.687 Z"
              />
              <path
                fill-rule="evenodd"
                stroke="rgb(255, 255, 255)"
                stroke-width="1px"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                fill="rgb(255, 255, 255)"
                d="M100.268,78.100 C102.906,75.007 104.500,71.017 104.500,66.667 C104.500,58.398 98.754,51.430 90.1000,49.451 L90.1000,44.444 C90.1000,41.990 88.985,39.1000 86.499,39.1000 C84.014,39.1000 81.1000,41.990 81.1000,44.444 L81.1000,48.889 L72.999,48.889 L72.999,44.444 C72.999,41.990 70.985,39.1000 68.500,39.1000 C66.014,39.1000 63.1000,41.990 63.1000,44.444 L63.1000,48.889 L59.499,48.889 C57.019,48.889 54.1000,50.880 54.1000,53.333 C54.1000,55.785 57.524,57.1000 59.1000,57.1000 L63.1000,57.1000 L63.1000,79.1000 L63.1000,101.1000 L58.1000,101.1000 C56.529,101.1000 54.1000,104.210 54.1000,106.666 C54.1000,109.118 57.024,111.111 59.499,111.111 L63.1000,111.111 L63.1000,115.555 C63.1000,118.010 66.014,119.1000 68.500,119.1000 C70.985,119.1000 72.999,118.010 72.999,115.555 L72.999,111.111 L81.1000,111.111 L81.1000,115.555 C81.1000,118.010 84.014,119.1000 86.499,119.1000 C88.985,119.1000 90.1000,118.010 90.1000,115.555 L90.1000,111.111 C100.925,111.111 108.999,103.136 108.999,93.333 C108.999,86.876 105.496,81.214 100.268,78.100 ZM72.999,57.996 L86.799,57.996 C91.872,57.996 95.999,62.033 95.999,66.995 C95.999,71.956 91.872,75.993 86.799,75.993 L72.999,75.993 L72.999,57.996 ZM90.1000,102.003 L72.999,102.003 L72.999,84.007 C75.068,84.007 89.059,84.007 90.1000,84.007 C95.962,84.007 99.999,88.043 99.999,93.005 C99.999,97.967 95.962,102.003 90.1000,102.003 Z"
              />
            </svg>
            <p className={classes.text}>Bitcoin</p>
            <p className={classes.text2}>BTC</p>
          </div>
        </div>
        <div className={classes.balance}>
          <p className={classes.text}>3.529020 BTC</p>
          <div className={classes.bottom}>
            <p className={classes.text}>$19.153 USD</p>

            <svg
              id="Group_18233"
              data-name="Group 18233"
              xmlns="http://www.w3.org/2000/svg"
              width="73.849"
              height="26.737"
              viewBox="0 0 73.849 26.737"
            >
              <path
                id="Path_9321"
                data-name="Path 9321"
                d="M13.487,0H60.362A13.486,13.486,0,0,1,73.849,13.487,13.287,13.287,0,0,1,60.362,26.737H13.487A13.287,13.287,0,0,1,0,13.487,13.486,13.486,0,0,1,13.487,0Z"
                fill="#ee225d"
                fill-rule="evenodd"
              />
              <text
                id="_-_2.32_"
                data-name="- 2.32%"
                transform="translate(14.913 16.997)"
                font-weight="700"
              >
                <tspan x="0" y="0">
                  - 2.32%
                </tspan>
              </text>
            </svg>
          </div>
        </div>
        <span className={classes.downArrow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26.28"
            height="7.956"
            viewBox="0 0 26.28 7.956"
          >
            <path
              id="Path_9322"
              data-name="Path 9322"
              d="M25.079,3.594,13.932,7.826a1.835,1.835,0,0,1-.725.119,1.85,1.85,0,0,1-.825-.11L1.195,3.622A1.85,1.85,0,1,1,2.507.161l10.618,4L23.771.119a1.857,1.857,0,0,1,1.307,3.476Z"
              transform="translate(0.005 0.002)"
              fill="#aeb8c4"
              fill-rule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default BitcoinWallet;
