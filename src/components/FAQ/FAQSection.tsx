import React from 'react';
import styles from './FAQ.module.scss';
import { Section } from '../Section';
import { FAQ } from '.';
import { faqs } from '@/contants/faqs';

export const FAQSection: React.FC = () => {
  return (
    <Section
      title='Your Questions, Answered'
      subtitle='Find answers to some of the frequently asked questions below.'
      id='faq'
      className={styles.faqHeader}
    >
      <FAQ>
        {faqs.map((faq, index) => (
          <FAQ.Item key={index} question={faq.question} answer={faq.answer} />
        ))}
      </FAQ>
    </Section>
  );
};
