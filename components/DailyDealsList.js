import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import DealItem from './DealItem';

const DealsList = ({ title, deals }) => (
  <Container>
    <h1 className='h2 font-weight-bold text-center mb-5'>{title}</h1>

    <Row className='justify-content-center'>
      {deals.map((deal) => (
        <Col key={deal.slug} md={5} lg={4}>
          <DealItem
            title={deal.name}
            image={deal.image}
            detailLink={`/food-deals/${deal.slug}/`}
          >
            <h3 className='title'>{deal.name}</h3>
            <p className='desc '>{deal.description}</p>
            <h6 className='delivery-time'>
              Ready to dispatch in{' '}
              <span className='text-color-primary'>{deal.deliveryTime}</span>
            </h6>

            <button type='button' className='deals-btn cta-btn-primary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                style={{ width: '22px', height: '22px' }}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </DealItem>
        </Col>
      ))}
    </Row>
  </Container>
);

DealsList.defaultProps = {
  title: 'Our Popular Deals',
  deals: [],
};

export default DealsList;
