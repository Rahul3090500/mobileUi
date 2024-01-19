/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import classes from "../../styles/components/layout/header.module.scss";
import Popup from "../Popup";
import { popupActions } from "../PopupActions";

const header = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isPopupOpen, setPopupOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const popupRef = useRef(null);
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isPopupOpen]);
  return (
    <>
      {" "}
      <div  ref={popupRef} className={classes.header}>
        <div className={classes.content}>
          {" "}
          <div className={classes.left}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="47px"
              height="80px"
            >
              <path
                fill-rule="evenodd"
                fill="rgb(174, 184, 196)"
                d="M44.925,67.916 L17.068,40.005 L44.925,12.094 C47.687,9.328 47.687,4.842 44.925,2.075 L44.925,2.075 C42.164,-0.692 37.686,-0.692 34.925,2.075 L2.069,34.995 C-0.693,37.762 -0.693,42.248 2.069,45.014 L34.925,77.935 C37.686,80.702 42.164,80.702 44.925,77.935 L44.925,77.935 C47.687,75.168 47.687,70.682 44.925,67.916 Z"
              />
            </svg>
          </div>
          <p className={classes.text}> Bitcoin Wallet</p>
          <div className={classes.right}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="17px"
              height="80px"
              style={{ scale: ".22" }}
              onClick={openPopup}
            >
              <path
                fill-rule="evenodd"
                fill="rgb(174, 184, 196)"
                d="M16.999,8.189 C16.999,12.711 13.194,16.378 8.500,16.378 C3.805,16.378 -0.000,12.711 -0.000,8.189 C-0.000,3.666 3.805,-0.000 8.500,-0.000 C13.194,-0.000 16.999,3.666 16.999,8.189 ZM16.999,39.685 C16.999,44.208 13.194,47.874 8.500,47.874 C3.805,47.874 -0.000,44.208 -0.000,39.685 C-0.000,35.162 3.805,31.496 8.500,31.496 C13.194,31.496 16.999,35.162 16.999,39.685 ZM16.999,71.811 C16.999,76.334 13.194,79.1000 8.500,79.1000 C3.805,79.1000 -0.000,76.334 -0.000,71.811 C-0.000,67.288 3.805,63.622 8.500,63.622 C13.194,63.622 16.999,67.288 16.999,71.811 Z"
              />
            </svg>
          </div>
        </div>
      </div>{" "}
      {isPopupOpen && (
        <Popup actions={popupActions} />
      )}{" "}
    </>
  );
};

export default header;
