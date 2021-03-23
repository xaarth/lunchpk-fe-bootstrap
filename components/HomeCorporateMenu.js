import Link from 'next/link';
import { Container, Row, Col, Image } from 'react-bootstrap';

const HomeCorporateMenu = () => {
  return (
    <section
      className=''
      style={{
        padding: '4.375rem 0 3.125rem',
      }}
    >
      <Container>
        <Row>
          <Col className='text-start' md={4}>
            <Image
              src='/assets/img/office-guys.png'
              alt='corporate package'
              width='300'
              fluid
            />
          </Col>
          <Col className='align-self-center' md={8}>
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
              <a className='cta-btn cta-btn-lg cta-btn-primary'>
                Corporate Menu
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeCorporateMenu;
