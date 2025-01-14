import React from 'react';
import '@/components/ui/TestimoniCard/TestimoniCard.module.scss';
import styles from './TestimoniCard.module.scss';

interface TestimoniCardProps {
  img: string;
  name: string;
  position: string;
  testimoni: string;
}

export const TestimoniCard: React.FC<TestimoniCardProps> = ({
  img,
  name,
  position,
  testimoni,
}: TestimoniCardProps) => {
  return (
    <div className={styles.testimoniCard}>
      <div className={styles.testimoniCardHeader}>
        <img src={img} alt='testimoni' className={styles.img} />
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.position}>{position}</p>
        </div>
      </div>
      <p className={styles.testimoni}>{testimoni}</p>
    </div>
  );
};
