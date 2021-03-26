import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const WeeklyTrial = ({ menuId }) => {
  return (
    <section style={{ padding: '0 0 5rem' }}>
      <Container>
        <p>
          You can also PAY FOR A WEEK TO TEST our service until you are fully
          satisfied to join monthly menu.
        </p>
        <p className='mb-5'>
          We have FIXED prices and we do not offer any discount below 100
          people.
        </p>
        <div className='bg-light p-4 rounded'>
          <Row>
            <Col className='my-3' lg={9}>
              <h3 className='font-weight-bold'>
                Not Sure Yet? Try our food for 6 days in PKR 1750
              </h3>
              <p className='mb-0'>
                You will get food for 1 person 1 Time Meal for 6 days.
              </p>
            </Col>
            <Col className='align-self-center my-3'>
              <Link href={`/place-an-order/${menuId}/WeeklyTrial`}>
                <a className='cta-btn cta-btn-primary'>Order Weekly Trial</a>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default WeeklyTrial;
