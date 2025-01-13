import React from 'react';
import styles from './CoreSkill.module.scss';

import { CoreSkill } from '.';
import { Section } from '../Section';
import { AnimationGroup } from './Animation/AnimationGroup';
import { skills } from '@/constants/skills';
import { SkillGroup } from './Skill/SkillGroup';

export const CoreSkillSection: React.FC = () => {
  return (
    <Section
      title='My Core Skills'
      subtitle='An overview of the key technologies and frameworks I specialize in'
      id='skills'
      className={styles.coreSkillHeader}
    >
      <CoreSkill>
        <CoreSkill.AnimationGroup>
          <AnimationGroup.Item></AnimationGroup.Item>
        </CoreSkill.AnimationGroup>
        <CoreSkill.SkillGroup>
          {skills.map((skill) => (
            <SkillGroup.Item
              key={skill.title}
              title={skill.title}
              proficiency={skill.proficiency}
            ></SkillGroup.Item>
          ))}
        </CoreSkill.SkillGroup>
      </CoreSkill>
    </Section>
  );
};
