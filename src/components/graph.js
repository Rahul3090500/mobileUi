import React, { useState, useEffect } from "react";
import classes from "../styles/components/Graph.module.scss";
import { LineChart, Line, Area, defs, linearGradient, stop, LabelList } from "recharts";

const Graph = () => {
  const [data, setData] = useState([{ name: "Page A", uv: 200, pv: 100, amt: 400 }]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the data for a moving effect
      const newDataPoint = { name: `Page ${data.length + 1}`, uv: Math.random() * 200, pv: Math.random() * 300, amt: 200 };
      setData(prevData => [...prevData, newDataPoint]);
    }, 1000); // Update every 1 second

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [data]);

  const latestDataPoint = data[data.length - 1];

  return (
    <div className={classes.Graph}>
       <div className={classes.additionalInfo}>
          <div className={classes.infoItem}><span style={{backgroundColor:"red",marginRight:"10px"}}></span>Lower: $4.895</div>
          <div className={classes.infoItem}><span style={{backgroundColor:"#58ff00",marginRight:"10px"}}></span>Higher: $4.895</div>
          <div className={classes.infoItem2}><span style={{backgroundColor:"orange"}}></span>1ВТС=$5.483</div>
        </div>
      <LineChart width={500} height={350} data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ff961d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ff961d" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="uv" stroke="none" fill="url(#colorUv)" />
        <Line type="monotone" dataKey="uv" stroke="url(#colorUv)" strokeWidth={3} />
        <Line type="monotone" dataKey="uv" stroke="none">
          <LabelList
            dataKey="uv"
            position="top"
            content={({ cx, cy, value }) => {
              return value === latestDataPoint.uv ? <circle cx={cx} cy={cy} r={6} fill="#ff961d" /> : null;
            }}
          />
        </Line>
      </LineChart>
    </div>
  );
};

export default Graph;
