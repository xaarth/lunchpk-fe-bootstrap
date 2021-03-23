import Link from 'next/link';

const HomeMenuCard = ({ name, desc, price, btnText, btnLink }) => {
  return (
    <div className='text-dark rounded p-4' style={{ background: '#f6f4f0' }}>
      <h4 className='font-weight-bold mb-2'>{name}</h4>
      <p
        className='mb-2'
        style={{ fontWeight: '500' }}
        dangerouslySetInnerHTML={{ __html: desc }}
      ></p>
      <h4 className='font-weight-bold mb-3'>{price}</h4>
      <Link href={btnLink}>
        <a className='cta-btn cta-btn-primary'>{btnText}</a>
      </Link>
    </div>
  );
};

HomeMenuCard.defaultProps = {
  btnLink: '#',
};

export default HomeMenuCard;
