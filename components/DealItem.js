import Link from 'next/link';
import Image from 'next/image';

const DealItem = ({ image, title, detailLink, children }) => (
  <Link href={detailLink}>
    <a className='menu-item-card mb-5 w-100 rounded'>
      <div
        className='image'
        style={{
          height: '250px',
          borderTopLeftRadius: '.25rem',
          borderTopRightRadius: '.25rem',
          overflow: 'hidden',
        }}
      >
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          layout='responsive'
        />
      </div>
      <div className='info'>{children}</div>
    </a>
  </Link>
);

export default DealItem;
