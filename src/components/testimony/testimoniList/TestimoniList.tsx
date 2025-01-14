import { TestimoniCard } from '@/components/ui/TestimoniCard/testimoniCard';
import React from 'react';
import styles from './TestimoniList.module.scss';
import { motion } from 'framer-motion';

interface TestimoniListProps {
  img: string;
  name: string;
  position: string;
  testimoni: string;
}

const TestimoniList: React.FC<TestimoniListProps> = ({
  img,
  name,
  position,
  testimoni,
}: TestimoniListProps) => {
  return (
    <motion.div
      className={styles.testimoniList}
      animate={{ x: ['0%', '-100%'] }} // Move from 0% to -100% horizontally
      transition={{
        repeat: Infinity,
        duration: 15, // Adjust duration to control the speed of the flow
        ease: 'linear',
      }}
    >
      <div className={styles.testimoniListInner}>
        {/* Loop through TestimoniListData */}
        <TestimoniCard
          img={img}
          name={name}
          position={position}
          testimoni={testimoni}
        />
        <TestimoniCard
          img={img}
          name={name}
          position={position}
          testimoni={testimoni}
        />
      </div>
    </motion.div>
  );
};

export default TestimoniList;
