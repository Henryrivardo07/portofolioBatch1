import React from 'react';
import styles from './WavesDecoration.module.scss';
import clsx from 'clsx';

type WavesDecorationProps = {
  className?: string;
  wavesClassName?: string;
  opacity?: number;
  bottom?: number;
};

export const WavesDecoration: React.FC<WavesDecorationProps> = ({
  className,
  wavesClassName,
  opacity = 1,
  bottom = 0,
}) => {
  const bottomRem = `${bottom / 16}rem`;

  console.log('bottomRem', bottomRem);

  return (
    <div
      className={clsx(styles.waves, className, wavesClassName)}
      style={{ opacity, bottom: bottomRem }}
    />
  );
};
