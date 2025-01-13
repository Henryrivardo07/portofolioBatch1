import React, { Children, useMemo } from 'react';
import styles from './Journey.module.scss';
import { JourneyItem } from './JourneyItem';
import clsx from 'clsx';

type JourneyItemProps = React.ComponentProps<typeof JourneyItem>;

type JourneyItemElement = React.ReactElement<JourneyItemProps>;

type JourneyProps = {
  children: JourneyItemElement | JourneyItemElement[];
};

type SubComponents = {
  Item: typeof JourneyItem;
  Description: typeof JourneyItem.Description;
};
export const Journey: React.FC<JourneyProps> & SubComponents = ({
  children,
}) => {
  const lastIndex = useMemo(() => Children.count(children) - 1, []);
  return (
    <div className={clsx(styles.journey)}>
      {Children.map(children, (child, index) =>
        React.cloneElement(child, {
          lastItem: index === lastIndex,
        })
      )}
    </div>
  );
};

Journey.Item = JourneyItem;

Journey.Description = JourneyItem.Description;
