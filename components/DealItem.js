import Link from 'next/link';
import Image from 'next/image';

const DealItem = ({ image, title, detailLink, children }) => {
  return (
    <Link href={detailLink}>
      <a className='menu-item-card mb-5 w-100 rounded'>
        <div
          className='image'
          style={{
            height: '200px',
            borderTopLeftRadius: '.75rem',
            borderTopRightRadius: '.75rem',
            overflow: 'hidden',
          }}
        >
          <Image
            style={{ objectFit: 'cover' }}
            src={image}
            alt={title}
            width={400}
            height={310}
          />
        </div>
        <div className='info'>{children}</div>
      </a>
    </Link>
  );
};

export default DealItem;
