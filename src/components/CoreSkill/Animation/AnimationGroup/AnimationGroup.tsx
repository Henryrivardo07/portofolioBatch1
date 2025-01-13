import React from 'react';
import { motion, Variants } from 'framer-motion';
import clsx from 'clsx';
import styles from './AnimationGroup.module.scss';
import { AnimationItem } from './AnimationItem';

type AnimationGroupProps = {
  children: React.ReactNode;
};

type SubComponents = {
  Item: typeof AnimationItem;
};

const circleVariants: Variants = {
  start: {
    rotate: 360,
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const AnimationGroup: React.FC<AnimationGroupProps> & SubComponents = ({
  children,
}) => {
  return (
    <div className={styles.animationGroup}>
      <motion.div
        className={clsx(styles.elipsContainer, styles.circleOuterContainer)}
        variants={circleVariants}
        animate='start'
      >
        {children}
        <motion.div
          className={clsx(styles.elipsContainer, styles.middleContainer)}
        >
          <motion.div
            className={clsx(styles.elipsContainer, styles.innerContainer)}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

AnimationGroup.Item = AnimationItem;
