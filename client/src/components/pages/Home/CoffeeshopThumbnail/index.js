import React from 'react';
import { css } from 'aphrodite';
import styles from './styles';

const CoffeeshopThumbnail = ({ id, name, image, author, comments }) => {
  return (
    <div>
      <div className={css(styles.wrapper)}>
        <p className={css(styles.p)}>{name}</p>
        <img src={image} alt="Coffeeshop" className={css(styles.image)} />
      </div>
    </div>
  );
};

export default CoffeeshopThumbnail;
