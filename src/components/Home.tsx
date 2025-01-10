import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <Navbar />
      <Hero />
    </div>
  );
};
