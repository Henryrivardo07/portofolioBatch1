import React from 'react';
import styles from './Achievement.module.scss';
import { AchievementGroup } from './AchievementGroup';
import clsx from 'clsx';
import { Variants, motion } from 'framer-motion';

const achievementVariants: Variants = {
  inView: {
    transition: { staggerChildren: 0.4 },
  },
};

type AchievementProps = {
  children: React.ReactNode;
};

type SubComponents = {
  Group: typeof AchievementGroup;
  Item: typeof AchievementGroup.Item;
};

export const Achievement: React.FC<AchievementProps> & SubComponents = ({
  children,
}) => {
  return (
    <main>
      <motion.div
        className={clsx(styles.achievement)}
        variants={achievementVariants}
        initial='outOfView'
        whileInView='inView'
        viewport={{ once: true, amount: 0.35 }}
      >
        {children}
      </motion.div>
    </main>
  );
};

Achievement.Group = AchievementGroup;
Achievement.Item = AchievementGroup.Item;
