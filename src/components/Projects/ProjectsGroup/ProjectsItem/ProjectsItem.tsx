import React from 'react';
import { Variants, motion } from 'framer-motion';
import styles from './ProjectsItem.module.scss';
import { TechStackButton } from '@/components/ui/TechStackButton';
import IconArrow from '@/assets/iconArrow.svg';

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
    x: -35,
  },
};

type ProjectsItemProps = {
  title: string;
  techStack: string[];
  description: string;
  buttonLink: string;
  image: string;
};

export const ProjectsItem: React.FC<ProjectsItemProps> = ({
  title,
  techStack,
  description,
  buttonLink,
  image,
}: ProjectsItemProps) => {
  const shortDesc =
    description.length > 75 ? `${description.slice(0, 90)}...` : description;

  return (
    <motion.div
      className={styles.projectItem}
      variants={achievementGroupVariants}
    >
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.contentProject}>
        <div className={styles.infoProject}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.techStack}>
            <TechStackButton techStack={techStack} />
          </div>
          <p className={styles.descriptionProject}>{shortDesc}</p>
        </div>
        <div className={styles.buttonProject}>
          <button>{buttonLink}</button>
          <IconArrow id='iconArrow' />
        </div>
      </div>
    </motion.div>
  );
};
