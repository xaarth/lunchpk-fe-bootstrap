import { Container, Row, Col } from 'react-bootstrap';
import HomeMenuCard from './HomeMenuCard';

const HomeMenus = () => {
  return (
    <section
      className='text-white text-center'
      style={{
        padding: '4.375rem 0 3.125rem',
        background: '#425b76',
      }}
    >
      <Container>
        <h2 className='font-weight-bold mb-5'>Our Popular Monthly Menus</h2>
        <Row className='mb-4'>
          <Col md={4}>
            <HomeMenuCard
              name='Mazedar Menu'
              price='PKR 5000/-'
              btnText='See Menu'
              btnLink='/monthly-menu/economy-menu/'
              desc='For 1 persons (1 time meal) <br /> Mon - Fri (22 days a month)'
            />
          </Col>
          <Col md={4}>
            <HomeMenuCard
              name='Economy Menu'
              price='PKR 8500/-'
              btnText='See Menu'
              btnLink='/monthly-menu/mazedar-menu/'
              desc=' For 2 persons (1 time meal) <br /> Mon - Fri (22 days a month) '
            />
          </Col>
          <Col md={4}>
            <HomeMenuCard
              name='Executive Menu'
              price='PKR 6000/-'
              btnText='See Menu'
              btnLink='/monthly-menu/executive-menu/'
              desc='For 1 person (1 time meal) <br /> Mon - Sat (26 days a month)'
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeMenus;
