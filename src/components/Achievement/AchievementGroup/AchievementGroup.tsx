import React from 'react';
import styles from './AchievementGroup.module.scss';
import { AchievementItem } from './AchievementItem';
import { Variants, motion } from 'framer-motion';

const achievementGroupVariants: Variants = {
  inView: {
    // opacity: 1,
    // x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
  outOfView: {
    // opacity: 0,
    // x: -50,
  },
};
type AchievementGroupProps = {
  children: React.ReactNode;
};

type SubComponents = {
  Item: typeof AchievementItem;
};

export const AchievementGroup: React.FC<AchievementGroupProps> &
  SubComponents = ({ children }) => {
  return (
    <motion.div
      className={styles.achievementGroup}
      variants={achievementGroupVariants}
    >
      {children}
    </motion.div>
  );
};

AchievementGroup.Item = AchievementItem;
