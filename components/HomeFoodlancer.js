import { Container, Row, Col, Image } from 'react-bootstrap';
import Link from 'next/link';

const HomeFoodlancer = () => {
  return (
    <section style={{ padding: '4.375rem 0 3.125rem' }}>
      <Container>
        <Row>
          <Col className='align-self-center' md={12} lg={8}>
            <h2 className='font-weight-bold mb-4'>
              Do You Love <span className='text-color-primary'>Cooking?</span>
            </h2>
            <p>Join us as a foodlancer and start selling homemade food.</p>
            <p>
              Lunch.pk is a true home based business that empowers food
              passionate families by giving them an opportunity to sell homemade
              food on the internet. Join lunch.pk family today and start making
              money right from your home kitchen.
            </p>
            <Link href='/make-money/apply-for-foodlancer/'>
              <a className='cta-btn cta-btn-lg cta-btn-primary'>Apply Now</a>
            </Link>
          </Col>
          <Col lg={4}>
            <div className='text-center'>
              <Image
                className='d-none d-lg-inline-block'
                src='/assets/img/make-money.png'
                fluid
                alt='make money with lunch.pk'
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeFoodlancer;
