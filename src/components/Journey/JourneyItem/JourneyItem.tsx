import React from 'react';
import styles from './JourneyItem.module.scss';
import CompanyIcon from '@/assets/icon-company.svg';
import DateIcon from '@/assets/icon-date.svg';
import { JourneyDescription } from './JourneyDescription';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

type JourneyItemProps = {
  title: string;
  companyName: string;
  dateFrom: string;
  dateTo: string;
  lastItem?: boolean;
  children: React.ReactNode;
};

type SubComponents = {
  Description: typeof JourneyDescription;
};

export const JourneyItem: React.FC<JourneyItemProps> & SubComponents = ({
  title,
  companyName,
  dateFrom,
  dateTo,
  lastItem,
  children,
}) => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
  const lineControls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      lineControls.start({ height: '107%' });
    }
  }, [inView, lineControls]);
  return (
    <>
      <div ref={ref} className={styles.timeline}>
        {!lastItem && (
          <motion.div
            className={styles.line}
            initial={{ height: 0 }}
            animate={lineControls}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        )}

        <div className={styles.circle}></div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.detail}>
          <div className={clsx(styles.company, styles.detailItem)}>
            <CompanyIcon />
            <span className={styles.companyName}>{companyName}</span>
          </div>
          <div className={styles.dot} />
          <div className={clsx(styles.date, styles.detailItem)}>
            <DateIcon />
            <p className={styles.dateText}>
              {dateFrom} - {dateTo}
            </p>
          </div>
        </div>
        <div className={styles.description}>{children}</div>
      </div>
    </>
  );
};

JourneyItem.Description = JourneyDescription;
