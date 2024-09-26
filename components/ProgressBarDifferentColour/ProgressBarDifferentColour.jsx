import React from 'react';
import styles from './ProgressBarDifferentColour.module.scss';

export const ProgressBarDifferentColour = () => {
    const currentValue = 30;
    const maxValue = 100;

    return (
        <progress 
        className={styles.progressBar}
        value={currentValue} 
        max={maxValue}
        >
            {currentValue}%
        </progress>
    )
}