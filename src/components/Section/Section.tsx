import React from 'react';
import styles from './Section.module.scss';
import clsx from 'clsx';
type SectionProps = {
  className?: string;
  id?: string;
  title: string;
  subtitle: string;
  containerWidth?: number;
  children: React.ReactNode;
};

export const Section: React.FC<SectionProps> = ({
  className,
  id,
  subtitle,
  containerWidth,
  title,
  children,
}) => {
  const containerStyle = containerWidth
    ? { maxWidth: `${containerWidth / 16}rem` }
    : {};
  return (
    <div className='container' style={containerStyle}>
      <section className={clsx(styles.section, className)} id={id}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div className={styles.sectionContent}>{children}</div>
      </section>
    </div>
  );
};
