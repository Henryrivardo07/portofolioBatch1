import React from 'react';
import styles from './ComparisonHeader.module.scss';

type ComparisonHeaderProps = {
  col1Title: string;
  col2Title: string;
  col3Title: string;
};

export const ComparisonHeader: React.FC<ComparisonHeaderProps> = ({
  col1Title,
  col2Title,
  col3Title,
}) => {
  return (
    <>
      <div className={styles.col1}>{col1Title}</div>
      <div className={styles.col2}>{col2Title}</div>
      <div className={styles.col3}>{col3Title}</div>
    </>
  );
};
