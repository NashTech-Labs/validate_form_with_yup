import { useCallback, useEffect, useState } from 'react';
import styles from './ProgressBarNoAnimation.module.scss';

export const ProgressBarNoAnimation = ()=> {
  const [currentValue, setCurrentValue] = useState(0)
  const maxValue = 100;

  const increment = useCallback(() => {
    if(currentValue === 100) {
        setCurrentValue(0);
    } else {
        setCurrentValue((v) => v + 10)
    }
  }, [setCurrentValue, currentValue]);

  useEffect(() => {
    const r = setInterval(() => {
      increment()
    }, 1000)

    return () => {
      clearInterval(r)
    }
  }, [increment])

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