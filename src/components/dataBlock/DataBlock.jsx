import React from "react";
import styles from "./DataBlock.module.css";
import Chart from "../Chart";

function DataBlock({ platform, sentiment, keyTerm }) {
  // Set colors based on sentiment
  let sentimentColor;
  if (sentiment === "positive") {
    sentimentColor = "green";
  } else if (sentiment === "negative") {
    sentimentColor = "red";
  } else {
    sentimentColor = "gray";
  }

  return (
    <div className={styles.datablock}>
      <div
        className={styles.blockHeader}
        style={{ backgroundColor: sentimentColor }}
      >
        <h3>{platform}</h3>
        <p>Key term: {keyTerm}</p>
        <p>Sentiment: {sentiment}</p>
      </div>
      <Chart sentimentColor={sentimentColor} />
    </div>
  );
}

export default DataBlock;
