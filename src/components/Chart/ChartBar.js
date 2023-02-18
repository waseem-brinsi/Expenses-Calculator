import React from "react";

import "./ChartBar";

function ChartBar(props) {
  let barFilHeight = "10px";

  if (props.max > 0) {
    barFilHeight = Math.round(props.value / props.maxValue) * 100 + 'px'
  }
console.log(barFilHeight);
  return (
    <div className="chart-bar">
      <div className="chart-bar__label">{props.label}</div>
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height:barFilHeight}}></div>
      </div>
      
    </div>
  );
}

export default ChartBar;
