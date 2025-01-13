import React, { useState } from 'react';
import styles from './About.module.scss';
import clsx from 'clsx';
import PlayButtonIcon from '@/assets/play-button.svg';
import Thumbnail from '@/assets/thumbnail.png';

export const About: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main>
      <section className={clsx(styles.about, 'container')} id='about'>
        <div className={styles.videoContainer}>
          {!isPlaying ? (
            <div
              className={styles.videoOverlay}
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={Thumbnail} // Ganti dengan URL gambar thumbnail video YouTube Anda
                alt='Video Thumbnail'
                className={styles.thumbnail}
              />
              <PlayButtonIcon className={styles.playButton} />
            </div>
          ) : (
            <iframe
              src='https://www.youtube.com/embed/Rb07HKg_2AY?si=j2uWXLMuGsWYcMO8' // Ganti dengan URL YouTube Anda
              title='YouTube Video'
              allow='autoplay; encrypted-media'
              allowFullScreen
              className={styles.videoIframe}
            ></iframe>
          )}
        </div>

        {/* experience section */}
      </section>
    </main>
  );
};
