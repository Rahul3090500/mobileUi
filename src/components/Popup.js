import React from "react";
import classes from "../styles/components/popup.module.scss";

const Popup = ({ actions }) => (
  <div className={classes.popup}>
    <div className={classes.content}>
      {actions.map((action, index) => (
        <div key={index} className={classes.action} onClick={action.onClick}>
          <p className={classes.text}>{action.label}</p>
          {action.icon && <img src={action.icon} alt={action.label} />}

        </div>
      ))}
    </div>
  </div>
);

export default Popup;
