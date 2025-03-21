import styles from './subs.module.scss';

import Sub from './sub/sub';

import { subData } from '@/data';

export default function Subs() {
  return (
    <section
      id="subs"
      className={`${styles.subs} section container`}
    >
      <h2 className="section__title">
        Выберите свой вариант подписки!
      </h2>

      <div className={styles.subs__wrapper}>
        {subData.map((sub) => (
          <Sub key={sub.id} {...sub} />
        ))}
      </div>
      <div
        className="light"
        style={{ right: '-50%', top: '-35%' }}
      ></div>
    </section>
  );
}
