import React from 'react';
import styles from './JourneyDescription.module.scss';

type JourneyDescriptionProps = {
  children: React.ReactNode;
};

export const JourneyDescription: React.FC<JourneyDescriptionProps> = ({
  children,
}) => {
  return (
    <div className={styles.journeyDescription}>
      <div className={styles.dot} />
      {children}|
    </div>
  );
};
