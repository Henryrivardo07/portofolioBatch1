import React from 'react';
import styles from './SkillGroup.module.scss';
import { SkillItem } from './SkillItem';
import { Variants, motion } from 'framer-motion';

const SKillGroupVariants: Variants = {
  inView: {
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
  outOfView: {},
};

type SkillGroupProps = {
  children: React.ReactNode;
};

type SubComponents = {
  Item: typeof SkillItem;
};

export const SkillGroup: React.FC<SkillGroupProps> & SubComponents = ({
  children,
}) => {
  return (
    <motion.div className={styles.skillGroup} variants={SKillGroupVariants}>
      {children}
    </motion.div>
  );
};

SkillGroup.Item = SkillItem;
