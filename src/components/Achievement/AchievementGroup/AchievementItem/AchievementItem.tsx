import React from 'react';
import styles from './Achievementitem.module.scss';
import clxs from 'clsx';
import { Variants, motion } from 'framer-motion';

const achievementGroupVariants: Variants = {
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  outOfView: {
    opacity: 0,
    x: -50,
  },
};

type AchievementItemProps = {
  type?: 'primary' | 'secondary';
  metrix: string;
  detail: string;
};

export const AchievementItem: React.FC<AchievementItemProps> = ({
  detail,
  metrix,
  type = 'primary',
}) => {
  return (
    <motion.div
      className={clxs(styles.achievementItem, styles[type])}
      variants={achievementGroupVariants}
    >
      <p className={styles.metrix}>{metrix}</p>
      <p className={styles.detail}>{detail}</p>
    </motion.div>
  );
};
