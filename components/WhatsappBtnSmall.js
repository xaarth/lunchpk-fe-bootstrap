import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/WhatsappBtnSmall.module.scss';

const WhatsappBtnSmall = () => (
  <Link href='https://wa.me/923335189005?text=I\%27m%20interested%20in%20your%20food'>
    <a className={styles['btn-wrapper']}>
      <Image src='/assets/img/whatsapp.webp' width='40' height='40' />
    </a>
  </Link>
);

export default WhatsappBtnSmall;
