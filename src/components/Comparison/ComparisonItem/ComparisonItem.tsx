import React from 'react';
import styles from './ComparisonItem.module.scss';
import IconCheckList from '@/assets/icon-checkList.svg';
import IconUncheck from '@/assets/icon-uncheck.svg';

type ComparisonItemProps = {
  featureName: string;
  ourState: boolean;
  competitorState: boolean;
};

export const ComparisonItem: React.FC<ComparisonItemProps> = ({
  featureName,
  ourState,
  competitorState,
}) => {
  return (
    <>
      <div className={styles.featureName}>{featureName}</div>
      <div className={styles.ourState}>
        {ourState ? <IconCheckList /> : <IconUncheck />}
      </div>
      <div className={styles.competitorState}>
        {competitorState ? <IconCheckList /> : <IconUncheck />}
      </div>
    </>
  );
};
