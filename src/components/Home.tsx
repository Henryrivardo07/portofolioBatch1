import React from 'react';
import styles from './Home.module.scss';
import Navbar from './Navbar/navbar';
import Hero from './Hero/Hero';
import Footer from './footer/footer';
import { CarrerJourneySection } from './Journey/CarrerJourneySection';
import AchievementSection from './Achievement/AchievementSection';
import { FAQSection } from './FAQ/FAQSection';
import { CoreSkillSection } from './CoreSkill/CoreSkillSection';
import { About } from './About/About';
import { ComparisonSection } from './Comparison/ComparisonSection';
import Testimoni from './testimony/testimoni/Testimoni';
import { ContactUs } from './contact-us';
import { ProjectsSection } from './Projects/ProjectsSections';

export const Home: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <Navbar />
      <Hero />
      <About />
      <AchievementSection />
      <CarrerJourneySection />
      <CoreSkillSection />
      <ComparisonSection />
      <ProjectsSection />
      <Testimoni />
      <FAQSection />
      <ContactUs />
      <Footer />
    </div>
  );
};
