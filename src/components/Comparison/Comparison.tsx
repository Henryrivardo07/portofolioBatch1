import React from 'react';
import styles from './Comparison.module.scss';
import { ComparisonHeader } from './ComparisonHeader';
import { ComparisonItem } from './ComparisonItem';

type ComparisonProps = {
  children: React.ReactNode;
};

type SubComponents = {
  Header: typeof ComparisonHeader;
  Item: typeof ComparisonItem;
};

export const Comparison: React.FC<ComparisonProps> & SubComponents = ({
  children,
}) => {
  return (
    <div>
      <div className={styles.comparison}>{children}</div>
    </div>
  );
};

Comparison.Header = ComparisonHeader;
Comparison.Item = ComparisonItem;
