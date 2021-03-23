import Link from 'next/link';
import { Container } from 'react-bootstrap';

const HomeInfo = () => {
  return (
    <section
      className='text-white'
      style={{
        padding: '4.375rem 0 3.125rem',
        background: 'linear-gradient(45deg,#00a4bd,#00bda5)',
      }}
    >
      <Container>
        <h2 className='font-weight-bold mb-4'>
          Say Good Bye To Low Quality Food.
        </h2>
        <p style={{ fontWeight: '500' }}>
          WE SAVE YOU FROM UNHEALTHY TOXIC FOOD CHOICES BY SERVING YOU REAL{' '}
          <br />
          HEALTHY HOMEMADE FOOD AT YOUR DOORSTEP.{' '}
        </p>
        <p style={{ fontWeight: '500' }}>
          Not only health is most neglected aspect of our life, but we have tons
          of unhealthy toxic food choices around us, <br /> making it hard to
          live a healthy life. That is why Obesity, diabetes and heart diseases
          have become <br /> so common in our lives.{' '}
        </p>
        <p className='font-weight-bold my-4'>
          NOT EVERYONE VALUE HYGIENIC FOOD… YOU DO!
        </p>

        <Link href='/monthly-menu'>
          <a className='cta-btn cta-btn-lg cta-btn-primary'>See our Menu</a>
        </Link>
      </Container>
    </section>
  );
};

export default HomeInfo;
