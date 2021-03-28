import Link from 'next/link';
import Image from 'react-bootstrap/Image';

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
            className='w-100 h-100'
            style={{ objectFit: 'cover' }}
            src={image}
            alt={title}
          />
        </div>
        <div className='info'>{children}</div>
      </a>
    </Link>
  );
};

export default DealItem;
