import React from "react";
import classes from "../styles/components/popup.module.scss";

const Popup = ({ actions }) => (
  <div className={classes.popup}>
    <div className={classes.content}>
      {actions.map((action, index) => (
        <div
          key={index}
          className={`${classes.action}`}
          onClick={action.onClick}
        >
          <p
            className={`${classes.text} ${
              action.label === "Remove" ? classes.removeText : ""
            }`}
          >
            {action.label}
            <span>
              {action.icon && <div className={classes.icon}>{action.icon}</div>}{" "}
            </span>
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Popup;
