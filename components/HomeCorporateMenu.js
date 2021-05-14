import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';

const HomeCorporateMenu = () => (
  <section
    className=''
    style={{
      padding: '4.375rem 0 3.125rem',
    }}
  >
    <Container>
      <Row>
        <Col
          className='text-start align-self-center justify-content-center'
          md={12}
          lg={4}
        >
          <div className='text-center mb-4'>
            <Image
              src='/assets/img/office-guys.webp'
              alt='corporate package'
              width={250}
              height={250}
            />
          </div>
        </Col>
        <Col
          className='align-self-center text-center text-lg-left'
          md={12}
          lg={8}
        >
          <h2 className='font-weight-bold mb-4'>
            Order Homemade Food For Your Office
          </h2>
          <p className='mb-4'>
            We ensure quality of food and services. we hold your payment in{' '}
            <br />
            company account until you are delivered complete days and <br />
            satisfied with food provided.
          </p>
          <Link href='/monthly-menu/corporate-menu/'>
            <a className='cta-btn cta-btn-lg cta-btn-primary'>Corporate Menu</a>
          </Link>
        </Col>
      </Row>
    </Container>
  </section>
);

export default HomeCorporateMenu;
