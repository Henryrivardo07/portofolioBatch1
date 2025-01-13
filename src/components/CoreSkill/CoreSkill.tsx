import React from 'react';
import styles from './CoreSkill.module.scss';
import clsx from 'clsx';
import { SkillGroup } from './Skill/SkillGroup';
import { AnimationGroup } from './Animation/AnimationGroup';
import { Variants, motion } from 'framer-motion';

const CoreSkillVariants: Variants = {
  inView: {
    transition: { staggerChildren: 0.4 },
  },
};

type CoreSkillProps = {
  children: React.ReactNode;
};

type SubComponents = {
  SkillGroup: typeof SkillGroup;
  AnimationGroup: typeof AnimationGroup;
};

export const CoreSkill: React.FC<CoreSkillProps> & SubComponents = ({
  children,
}) => {
  return (
    <main>
      <motion.div
        className={clsx(styles.CoreSkill)}
        variants={CoreSkillVariants}
        initial='outOfView'
        whileInView='inView'
        viewport={{ once: true, amount: 0.35 }}
      >
        {children}
      </motion.div>
    </main>
  );
};

CoreSkill.SkillGroup = SkillGroup;
CoreSkill.AnimationGroup = AnimationGroup;
