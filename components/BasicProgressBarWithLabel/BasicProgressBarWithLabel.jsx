import React from "react";

export const BasicProgressBarWithLabel = () => {
  const currentValue = 30;
  const maxValue = 100;

  return (
    <>
      <label htmlFor="progress-bar">Uploading: </label>
      <progress id="progress-bar" value={currentValue} max={maxValue}>
        {currentValue}%
      </progress>
    </>
  );
};
