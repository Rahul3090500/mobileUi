import React, { useState } from "react";
import classes from "../styles/components/BitcoinWallet.module.scss";
import BuyBtc from "./buyBtc";

const BitcoinWallet = () => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleHeight = () => {
    setExpanded(!isExpanded);
  };
  const bitcoinIconBuy = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="67.555"
      height="67.582"
      viewBox="0 0 67.555 67.582"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          y1="1"
          x2="0"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#1d72f1" />
          <stop offset="1" stop-color="#17c8fc" />
        </linearGradient>
      </defs>
      <g
        id="Group_18234"
        data-name="Group 18234"
        transform="translate(-0.812 -0.687)"
      >
        <path
          id="Path_9323"
          data-name="Path 9323"
          d="M34.211.687A33.793,33.793,0,1,1,.812,34.478,33.867,33.867,0,0,1,34.211.687Z"
          transform="translate(0 0)"
          fill="#2376ff"
          fill-rule="evenodd"
        />
        <path
          id="Path_9324"
          data-name="Path 9324"
          d="M34.211.687A33.793,33.793,0,1,1,.812,34.478,33.867,33.867,0,0,1,34.211.687Z"
          transform="translate(0 0)"
          fill="url(#linear-gradient)"
        />
        <path
          id="Path_9325"
          data-name="Path 9325"
          d="M68.188,54.466A12.7,12.7,0,0,0,71.35,55.96,28.031,28.031,0,0,1,75.527,57.8a6.569,6.569,0,0,1,2.42,2.391,6.825,6.825,0,0,1,.524,3.567,5.934,5.934,0,0,1-1.486,5.22,7.613,7.613,0,0,1-4.519,2.341c.041.173-.314.353-.314.538V72.7a1.723,1.723,0,0,1-1.938,1.938c-1.28,0-2.7-.658-2.7-1.938v-.842c0-.172.4-.339.435-.5a7.345,7.345,0,0,1-5.721-4.15,2.269,2.269,0,0,1,1.473-3.188l.175-.046a2.265,2.265,0,0,1,2.614,1.2,3.781,3.781,0,0,0,3.73,2.163,3.293,3.293,0,0,0,2.487-.836,2.827,2.827,0,0,0,.8-2.021,2.227,2.227,0,0,0-.8-1.858,14.357,14.357,0,0,0-3.538-1.6,20.823,20.823,0,0,1-3.853-1.694,6.373,6.373,0,0,1-2.253-2.339,6.945,6.945,0,0,1-.866-3.511,7.787,7.787,0,0,1,1.548-4.727,6.573,6.573,0,0,1,4.156-2.438c0-.049-.387-.1-.387-.149v-.842A2.671,2.671,0,0,1,70.214,43c1.279,0,1.938,1.037,1.938,2.317v.842c0,.061.374.12.37.179a6.83,6.83,0,0,1,4.513,3.1,2.273,2.273,0,0,1-3.853,2.412,3.372,3.372,0,0,0-2.936-1.784,2.719,2.719,0,0,0-2.031.778,2.585,2.585,0,0,0-.767,1.885A2.112,2.112,0,0,0,68.188,54.466Z"
          transform="translate(-35.414 -24.489)"
          fill="#fff"
          fill-rule="evenodd"
        />
      </g>
    </svg>
  );
  const bitcoinIconSell = (
  <svg id="Group_18235" data-name="Group 18235" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="66.576" height="66.576" viewBox="0 0 66.576 66.576">
    <defs>
      <linearGradient id="linear-gradient2" y1="1" x2="0" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#fb23a2"/>
        <stop offset="1" stop-color="#ff677c"/>
      </linearGradient>
    </defs>
    <path id="Path_9326" data-name="Path 9326" d="M33.1,0A33.157,33.157,0,0,1,66.576,33.1,33.006,33.006,0,0,1,33.1,66.576,33.288,33.288,0,0,1,33.1,0Z" transform="translate(0 0)" fill="#fff" fill-rule="evenodd"/>
    <path id="Path_9327" data-name="Path 9327" d="M33.1,0A33.157,33.157,0,0,1,66.576,33.1,33.006,33.006,0,0,1,33.1,66.576,33.288,33.288,0,0,1,33.1,0Z" transform="translate(0 0)" fill="url(#linear-gradient2)"/>
    <path id="Path_9328" data-name="Path 9328" d="M67.177,53.557a12.6,12.6,0,0,0,3.134,1.479,27.8,27.8,0,0,1,4.139,1.822,6.507,6.507,0,0,1,2.4,2.369,6.82,6.82,0,0,1,.9,3.533,7.194,7.194,0,0,1-6.327,7.49,2.288,2.288,0,0,1,.065.534v.833a2.3,2.3,0,1,1-4.592,0v-.833a2.28,2.28,0,0,1,.055-.5,7.278,7.278,0,0,1-5.67-4.111,2.248,2.248,0,0,1,1.46-3.158l.173-.045A2.246,2.246,0,0,1,65.5,64.162,3.748,3.748,0,0,0,69.2,66.3a3.263,3.263,0,0,0,2.465-.828,2.8,2.8,0,0,0,.788-2,2.205,2.205,0,0,0-.788-1.84,14.222,14.222,0,0,0-3.507-1.59,20.649,20.649,0,0,1-3.819-1.678A6.316,6.316,0,0,1,62.1,56.051a6.883,6.883,0,0,1-.858-3.479,7.713,7.713,0,0,1,1.534-4.682A6.516,6.516,0,0,1,66.9,45.474c0-.049-.008-.1-.008-.148v-.833a2.3,2.3,0,1,1,4.592,0v.833c0,.06,0,.119-.009.178a6.77,6.77,0,0,1,4.473,3.075,2.252,2.252,0,0,1-3.819,2.389A3.342,3.342,0,0,0,69.218,49.2a2.694,2.694,0,0,0-2.013.77,2.56,2.56,0,0,0-.761,1.868A2.093,2.093,0,0,0,67.177,53.557Z" transform="translate(-35.501 -24.54)" fill="#fff" fill-rule="evenodd"/>
  </svg>
  
  );
  return (
    <div
    className={`${classes.BitcoinWallet} ${isExpanded ? classes.expanded : ""}`}
  >      <div className={classes.BitcoinWallet__content}>
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
        <div style={{opacity:isExpanded?1:0}} className={classes.buy_sell}>
        <BuyBtc icon={bitcoinIconBuy} text="Buy BTC" />
        <BuyBtc icon={bitcoinIconSell} text="Sell BTC" />
      </div>
        <span className={classes.downArrow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26.28"
            height="7.956"
            viewBox="0 0 26.28 7.956"
            onClick={toggleHeight}
            style={{rotate:isExpanded?"180deg":""}}
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
