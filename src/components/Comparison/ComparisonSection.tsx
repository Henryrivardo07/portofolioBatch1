import React from 'react';
import styles from './Comparison.module.scss';
import { Section } from '../Section';
import { Comparison } from '.';

export const ComparisonSection: React.FC = () => {
  return (
    <main>
      <Section
        id='comparison'
        title='Why I Stand Out'
        subtitle='A showcase of my unique approach and skill set compared to conventional front-end developers.'
        className={styles.comparisonWrapper}
      >
        <Comparison>
          <Comparison.Header
            col1Title='Skill'
            col2Title='Me'
            col3Title='Other'
          />
          {new Array(7).fill(null).map((_, index) => (
            <Comparison.Item
              key={`${index}-item`}
              featureName='React Expert'
              ourState={true}
              competitorState={false}
            />
          ))}
        </Comparison>
      </Section>
    </main>
  );
};
