import React, { useState } from 'react';
import classes from "../styles/components/DayTab.module.scss";

const DayTab = () => {
  const [activeTab, setActiveTab] = useState('day');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={classes.daytab}>
      <div
        className={`${classes.tab} ${activeTab === 'day' ? classes.active : ''}`}
        onClick={() => handleTabClick('day')}
      >
        Day
      </div>
      <div
        className={`${classes.tab} ${activeTab === 'month' ? classes.active : ''}`}
        onClick={() => handleTabClick('month')}
      >
        Month
      </div>
      <div
        className={`${classes.tab} ${activeTab === 'week' ? classes.active : ''}`}
        onClick={() => handleTabClick('week')}
      >
        Week
      </div>
      <div
        className={`${classes.tab} ${activeTab === 'year' ? classes.active : ''}`}
        onClick={() => handleTabClick('year')}
      >
        Year
      </div>
    </div>
  );
};

export default DayTab;
