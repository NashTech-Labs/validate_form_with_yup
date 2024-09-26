import { useCallback, useEffect, useState } from 'react';
import styles from '../styles/home.module.css';
import { BasicProgressBar } from '../components/BasicProgressBar';
import { BasicProgressBarWithLabel } from '../components/BasicProgressBarWithLabel';
import { ProgressBarDifferentColour } from '../components/ProgressBarDifferentColour';
import { ProgressBarNoAnimation } from '../components/ProgressBarNoAnimation/ProgressBarNoAnimation';
import { ProgressBarWithAnimation } from '../components/ProgressBarWithAnimation/ProgressBarWithAnimation';

const Home = () => {
  return (
    <main className={styles.main}>
      
      <h1>Progress bar Demo</h1>
      <p>
        Welcome, if you are here, there is a high chance you got here from a Medium story.
      </p>
      
      <h2>Basic Progress Bar</h2>
      <BasicProgressBar />

      <h2>Basic Progress Bar with Label</h2>
      <BasicProgressBarWithLabel />

      <h2>Progress Bar different colour</h2>
      <ProgressBarDifferentColour />

      <h2>Progress Bar no animation</h2>
      <ProgressBarNoAnimation />

      <h2>Progress Bar with animation</h2>
      <ProgressBarWithAnimation />

    </main>
  )
}

export default Home;
