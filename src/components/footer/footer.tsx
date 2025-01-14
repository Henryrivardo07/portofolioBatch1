import React from 'react';
import linkedin from '@/assets/Linkedin.png';
import instagram from '@/assets/Instagram.png';
import browsing from '@/assets/browsing.png';
import logo from '@/assets/logo.png';
import styles from './footer.module.scss';
import clsx from 'clsx';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={clsx(styles.footer, 'container')}>
        <div className={styles.socialMedia}>
          <span className={styles.socialMediaItem}>
            <img src={linkedin} alt='linkedin' />
          </span>
          <span className={styles.socialMediaItem}>
            <img src={instagram} alt='logo' />
          </span>
          <span className={styles.socialMediaItem}>
            <img src={browsing} alt='logo' />
          </span>
        </div>
        <div className={styles.footerInfo}>
          <span>
            <img src={logo} alt='logo' />
          </span>
          <span>
            <p>© alex2024</p>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
