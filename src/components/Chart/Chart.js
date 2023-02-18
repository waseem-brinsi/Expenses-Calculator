import React from "react";
import "./Chart.css";

import ChartBar from "./ChartBar";

function Chart(props) {

  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  console.log("dataPointValues : " + dataPointValues);
  const totalMaximum = Math.max(...dataPointValues);
  console.log("totalMaximum : " + totalMaximum);
  
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
}

export default Chart;
