import React from 'react';
import styles from './Achievement.module.scss';
import { Achievement } from '.';

const AchievementSection: React.FC = () => {
  return (
    <div className='container'>
      {/* HeadLine */}
      <div className={styles.headerAchievement}>
        <div>
          <h1 className={styles.title}>Who am I</h1>
        </div>
        <div>
          <p className={styles.subtitle}>
            Hi, I’m Alex, a Front-End Developer & Web Programming Instructor
            based in Jakarta. With over <span>3 years of experience</span>, I
            specialize in crafting interactive, responsive, and user-friendly
            websites that deliver exceptional digital experiences. My expertise
            spans across various industries, including e-commerce, education,
            and SaaS. I am proficient in modern front-end technologies, clean
            coding practices, and performance optimization.
          </p>
        </div>
      </div>
      <Achievement>
        <Achievement.Group>
          <Achievement.Item
            type='secondary'
            metrix='3+'
            detail='Years of Experience'
          />
          <Achievement.Item
            type='primary'
            metrix='3+'
            detail='Years of Experience'
          />
        </Achievement.Group>
        <Achievement.Group>
          <Achievement.Item
            type='secondary'
            metrix='3+'
            detail='Years of Experience'
          />
          <Achievement.Item
            type='primary'
            metrix='3+'
            detail='Years of Experience'
          />
        </Achievement.Group>
      </Achievement>
    </div>
  );
};

export default AchievementSection;
