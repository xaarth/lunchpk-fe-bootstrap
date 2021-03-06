import Image from 'next/image';

const StepCard = ({ imgSrc, text, desc, stepNum }) => (
  <div
    className='step-card bg-white mx-auto p-4 position-relative rounded'
    style={{
      width: '90%',
      height: '100%',
      boxShadow: '0 8px 30px -5px rgba(51,71,91,0.12)',
    }}
  >
    <h2
      className='font-weight-bold text-success'
      style={{ position: 'absolute', top: '8px', left: '20px' }}
    >
      {stepNum}
    </h2>
    <Image className='mb-3' src={imgSrc} width={70} height={105} alt={text} />
    <h5 className='mb-0' style={{ fontWeight: '600' }}>
      {text}
    </h5>
    {desc && (
      <p style={{ fontSize: '14px', lineHeight: '20px' }} className='mt-2 mb-0'>
        {desc}
      </p>
    )}
  </div>
);

export default StepCard;
