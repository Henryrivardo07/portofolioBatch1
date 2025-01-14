import React from 'react';
import styles from './ProjectsGroup.module.scss';
import { Variants, motion } from 'framer-motion';
import { ProjectsItem } from './ProjectsItem';

const projectsGroupVariants: Variants = {
  inView: {
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
  outOfView: {},
};

type ProjectsGroupProps = {
  children: React.ReactNode;
};

type SubComponents = {
  Item: typeof ProjectsItem;
};

export const ProjectsGroup: React.FC<ProjectsGroupProps> & SubComponents = ({
  children,
}) => {
  return (
    <motion.div
      className={styles.projectGroup}
      variants={projectsGroupVariants}
    >
      {children}
    </motion.div>
  );
};

ProjectsGroup.Item = ProjectsItem;
