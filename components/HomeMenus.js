import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeMenuCard from './HomeMenuCard';

const HomeMenus = () => (
  <section
    className='text-center text-white'
    style={{
      padding: '4.375rem 0 3.125rem',
      background: '#425b76',
    }}
  >
    <Container>
      <h2 className='mb-5 font-weight-bold'>Our Popular Monthly Menus</h2>
      <Row className=''>
        <Col className='mb-4' md={6} lg={4}>
          <HomeMenuCard
            name='Mazedar Menu'
            price='PKR 5000/-'
            btnText='See Menu'
            btnLink='/monthly-menu/mazedar-menu/'
            desc='For 1 persons (1 time meal) <br /> Mon - Fri (22 days a month)'
          />
        </Col>
        <Col className='mb-4' md={6} lg={4}>
          <HomeMenuCard
            name='Economy Menu'
            price='PKR 9500/-'
            btnText='See Menu'
            btnLink='/monthly-menu/economy-menu/'
            desc=' For 2 persons (1 time meal) <br /> Mon - Fri (22 days a month) '
          />
        </Col>
        <Col className='mb-4' md={12} lg={4}>
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

export default HomeMenus;
