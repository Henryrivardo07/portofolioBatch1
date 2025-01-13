import React from 'react';
import { Section } from '../Section';
import { Journey } from './Journey';
import styles from './Journey.module.scss';
import clsx from 'clsx';

export const CarrerJourneySection: React.FC = () => {
  return (
    <Section
      id='journey'
      title='Carrer Journey'
      subtitle='A visual timeline of key milestones and experiences from over the years.'
      className={clsx(styles.journeyWrapper, 'container')}
    >
      <Journey>
        {new Array(3).fill(null).map((_, index) => (
          <Journey.Item
            title='Fullstack Developer Internship'
            companyName='Binar Academy'
            dateFrom='2023'
            dateTo='2023'
            key={`${index}-item`}
          >
            {new Array(4).fill(null).map((_, index) => (
              <Journey.Description key={`${index}-item`}>
                Developed and maintained responsive web applications, improving
                load times by 30% through performance optimization.
              </Journey.Description>
            ))}
          </Journey.Item>
        ))}
      </Journey>
    </Section>
  );
};
