import classes from "../src/styles/components/layout/body.module.scss";
import BuyBtc from "./components/buyBtc";
import DayTab from "./components/dayTab";
import Graph from "./components/graph";
import BitcoinBox from "./components/BitcoinWallet";
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
function App() {
  return (
    <div className={classes.main}>
      <BitcoinBox />
      <DayTab />
      <Graph />
      <div className={classes.buy_sell}>
        <BuyBtc icon={bitcoinIconBuy} text="Buy BTC" />

        <BuyBtc icon={bitcoinIconSell} text="Sell BTC" />
      </div>
    </div>
  );
}

export default App;
