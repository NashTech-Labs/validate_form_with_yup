import React from 'react';

export const BasicProgressBar = () => {
    const currentValue = 30;
    const maxValue = 100;

    return (
        <progress value={currentValue} max={maxValue}>{currentValue}%</progress>
    )
}