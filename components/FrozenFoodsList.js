import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DealItem from './DealItem';

const FrozenFoodsList = ({ title, deals }) => (
  <Container>
    <h1 className='h2 font-weight-bold text-center mb-5'>{title}</h1>

    <Row className='justify-content-center'>
      {deals.map((deal) => (
        <Col key={deal.slug} md={5} lg={4}>
          <DealItem
            title={deal.name}
            image={deal.image}
            detailLink={`/frozen-food/${deal.slug}`}
          >
            <h3 className='title mb-1'>{deal.name}</h3>
            <p style={{ fontSize: '16px' }} className='pieces mb-1'>
              {deal.pieces} pieces
            </p>
            <h6 className='price text-color-primary'>
              {deal.priceCurrency} {deal.price}
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

FrozenFoodsList.defaultProps = {
  title: 'FrozenFoods',
  deals: [],
};

export default FrozenFoodsList;
