import React from "react";
import classes from "../styles/components/BuyBtc.module.scss";

const BuyBtc = ({ icon, text }) => {
  return (
    <div className={classes.BuyBtc}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.text}>{text}</div>
    </div>
  );
};

export default BuyBtc;
