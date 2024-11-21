import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Chart = ({ sentimentColor }) => {
  const data = [
    { sentiment: "Positive", count: 60 },
    { sentiment: "Neutral", count: 25 },
    { sentiment: "Negative", count: 15 },
  ];

  // The return statement must be inside this function
  return (
    <BarChart width={400} height={300} data={data}>
      <XAxis dataKey="sentiment" />
      <YAxis />
      <Tooltip /> {/* Optional tooltip */}
      <Bar dataKey="count" fill={sentimentColor} />
    </BarChart>
  );
};

export default Chart;
