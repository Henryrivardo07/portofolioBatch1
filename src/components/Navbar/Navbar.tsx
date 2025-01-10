import React, { useState } from 'react';
import NavIcon from '@/assets/nav_icon.svg';
import HamburgerMenu from '@/assets/icon-hamburger.svg';
import SMSIcon from '@/assets/Icon-message.svg';
import { Button } from '../ui/Button';
import styles from './Navbar.module.scss';
import clsx from 'clsx';
import CloseIcon from '@/assets/icon-close.svg';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toogleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={clsx(styles.header, 'container')}>
      {/* navbar untuk mobile */}
      {/* logo */}
      <div className={styles.logo}>
        <NavIcon />
      </div>

      {/* Navbar untuk mobile */}
      <nav className={clsx(styles.mobileMenu, { [styles.open]: menuOpen })}>
        {/* menu navbar mobile */}
        <div className={styles.mobileHeader}>
          <div className={styles.logo}>
            <NavIcon />
          </div>
          <div
            className={styles.closeIcon}
            onClick={toogleMenu}
            role='button'
            aria-label='Close Menu'
          >
            <CloseIcon />
          </div>
        </div>
        <ul className={styles.mobileNavLinks}>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
        <Button as='a' href='#contactMe' className={styles.ctaButton}>
          <div className={styles.buttonContent}>
            <SMSIcon />
            <span className={clsx(styles.buttonText, styles.buttonTextMobile)}>
              Hire Me
            </span>
          </div>
        </Button>
      </nav>

      {/* Navbar untuk desktop */}
      <nav className={styles.desktopMenu}>
        <ul className={styles.desktopNavLinks}>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Button Hire Me untuk desktop */}
      <Button as='a' href='#contactMe' className={styles.ctaButton}>
        <div className={styles.buttonContent}>
          <SMSIcon />
          <span className={styles.buttonText}>Hire Me</span>
        </div>
      </Button>

      {/* Hamburger Menu */}
      <div
        className={styles.hamburger}
        onClick={toogleMenu}
        role='button'
        aria-label='Open Menu'
      >
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Navbar;
