import React from 'react';
import styles from './ContactUs.module.scss';
import { ContactForm } from './ContactForm';
import clsx from 'clsx';

export const ContactUs: React.FC = () => {
  return (
    <div
      className={clsx(styles.contactUsContainer, 'container')}
      id='contactMe'
    >
      {/* Dekorasi tambahan */}
      <div className={styles.decorationEllipse}></div>
      <div className={styles.decorationGrid}></div>
      <div className={styles.decorationCircle}></div>

      {/* Konten utama */}
      <div className={styles.contactHeader}>
        <h2 className={styles.title}>Contact Me</h2>
        <p className={styles.description}>
          Feel free to drop a message for any inquiries or collaborations.
        </p>
      </div>
      <ContactForm className={styles.contactForm} />
    </div>
  );
};
