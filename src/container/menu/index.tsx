import styles from './style.module.scss';

import img1 from './img/menu-1.png';
import img2 from './img/menu-2.png';
import img3 from './img/menu-3.png';
import img4 from './img/menu-4.png';
import img5 from './img/menu-5.png';
import img6 from './img/menu-6.png';
import img7 from './img/menu-7.png';
import img8 from './img/menu-8.png';

export default (props: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageBlock}>
        <img src={img1} alt='menu-img' width='1024px' />
      </div>
      <div className={styles.imageBlock}>
        <img src={img2} alt='menu-img' width='1024px' />
      </div>
      <div className={styles.imageBlock}>
        <img src={img3} alt='menu-img' width='1024px' />
      </div>
      <div className={styles.imageBlock}>
        <img src={img4} alt='menu-img' width='1024px' />
      </div>
      <div className={styles.imageBlock}>
        <img src={img5} alt='menu-img' width='1024px' />
      </div>
      <div className={styles.imageBlock}>
        <img src={img6} alt='menu-img' width='1024px' />
      </div>
      <div className={styles.imageBlock}>
        <img src={img7} alt='menu-img' width='1024px' />
      </div>
      <div className={styles.imageBlock}>
        <img src={img8} alt='menu-img' width='1024px' />
      </div>
    </div>
  );
};
