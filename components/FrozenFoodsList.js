import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DealItem from './DealItem';

const FrozenFoodsList = ({ title, deals }) => (
  <Container>
    <h1 className='h2 font-weight-bold text-center mb-5'>{title}</h1>

    <Row className='justify-content-center'>
      {deals.map((deal, index) => (
        <Col key={index} md={5} lg={3}>
          <DealItem
            title={deal.name}
            image={deal.image}
            detailLink={`/frozen-food/${deal.slug}`}
          >
            <h3 className='title mb-1'>{deal.name}</h3>
            <p style={{ fontSize: '14px' }} className='pieces mb-1'>
              {deal.pieces} pieces
            </p>
            <h6 className='delivery-time text-color-primary'>
              {deal.priceCurrency} {deal.price}
            </h6>
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
