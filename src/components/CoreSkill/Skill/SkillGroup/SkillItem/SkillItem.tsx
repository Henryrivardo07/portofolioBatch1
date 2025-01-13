import React from 'react';
import styles from './SkillItem.module.scss';
import { Variants, motion } from 'framer-motion';

type SkillItemProps = {
  title: string;
  proficiency: number;
};

export const SkillItem: React.FC<SkillItemProps> = ({ title, proficiency }) => {
  const skillGroupVariants: Variants = {
    inView: {
      width: `${proficiency}%`,
      transition: {
        duration: 1.5,
      },
    },
    outOfView: {
      width: 0,
    },
  };

  return (
    <div className={styles['skill-container']}>
      <div className={styles['skill-bar']}>
        {/* Informasi skill */}
        <div className={styles['skill-info']}>
          <span className={styles.title}>{title}</span>
          <span className={styles.proficiency}>{proficiency}%</span>
        </div>

        {/* Progress Bar */}
        <div className={styles['progress-container']}>
          <motion.div
            className={styles.progress}
            variants={skillGroupVariants}
          />
        </div>
      </div>
    </div>
  );
};
