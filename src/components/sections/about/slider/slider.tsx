import styles from './slider.module.scss';

import Marquee from 'react-fast-marquee';

import { SliderProps } from '@/types';

export default function Slider(props: SliderProps) {
  return (
    <section className={styles.content}>
      <div className={styles.content__info}>
        <img
          src={props.icon}
          alt="Иконка"
          className={styles.info__icon}
        />
        <div className={styles.info__text}>
          <h2 className={styles.text__title}>{props.title}</h2>
          <p className={styles.text__description}>
            {props.description}
          </p>
        </div>
      </div>

      <Marquee
        pauseOnHover={true}
        pauseOnClick={true}
        speed={60}
        className={`${styles.slider} container`}
      >
        {props.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Слайд"
            className={styles.slider__slide}
          />
        ))}
      </Marquee>
    </section>
  );
}
