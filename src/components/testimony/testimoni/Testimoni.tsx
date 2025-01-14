import React from 'react';
import styles from './Testimoni.module.scss';
import { TestimoniCard } from '@/components/ui/TestimoniCard/testimoniCard';
import Marquee from 'react-marquee-slider';
import testimoni1 from '@/assets/woman1.png';
import { FadeWrapper } from '@/components/ui/fadeComponet/FadeWrapper';
import { Section } from '@/components/Section';

const TestimoniListData = [
  {
    id: 1,
    name: 'John Doe',
    img: testimoni1,
    position: 'CEO',
    testimoni:
      '“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”',
  },
  {
    id: 2,
    name: 'John Doe',
    img: testimoni1,
    position: 'CEO',
    testimoni:
      '“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”',
  },
  {
    id: 3,
    name: 'John Doe',
    img: testimoni1,
    position: 'CEO',
    testimoni:
      '“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”',
  },
  {
    id: 4,
    name: 'John Doe',
    img: testimoni1,
    position: 'CEO',
    testimoni:
      '“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”',
  },

  {
    id: 5,
    name: 'John Doe',
    img: testimoni1,
    position: 'CEO',
    testimoni:
      '“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”',
  },
];

const Testimoni: React.FC = () => {
  return (
    <main>
      <Section
        id='testimoni'
        title='Testimoni'
        subtitle='What My Client Say About Me'
        className={styles.testimoniWrapper}
      >
        {/* Marquee pertama */}
        <FadeWrapper
          type='both'
          direction='horizontal'
          fadeWidth={80} // Atur sesuai kebutuhan
          fadeColor='rgba(0, 0, 0, 1)' // Warna transparan
        >
          {/* @ts-ignore: Ignore TypeScript error for 'style' */}
          <Marquee velocity={50} direction='ltr' resetAfterTries={100}>
            {TestimoniListData.map((testimoni) => (
              <div key={testimoni.id} className={styles.testimoniCardContainer}>
                <TestimoniCard
                  img={testimoni.img}
                  name={testimoni.name}
                  position={testimoni.position}
                  testimoni={testimoni.testimoni}
                />
              </div>
            ))}
          </Marquee>
        </FadeWrapper>

        {/* Marquee kedua */}

        <FadeWrapper
          type='both'
          direction='horizontal'
          fadeWidth={80}
          fadeColor='rgba(0, 0, 0, 1)'
        >
          {/* @ts-ignore: Ignore TypeScript error for 'style' */}
          <Marquee velocity={50} direction='rtl' resetAfterTries={100}>
            {TestimoniListData.map((testimoni) => (
              <div key={testimoni.id} className={styles.testimoniCardContainer}>
                <TestimoniCard
                  img={testimoni.img}
                  name={testimoni.name}
                  position={testimoni.position}
                  testimoni={testimoni.testimoni}
                />
              </div>
            ))}
          </Marquee>
        </FadeWrapper>
      </Section>
    </main>
  );
};

export default Testimoni;
