import DealItem from './DealItem';
import { Container, Row, Col } from 'react-bootstrap';

const DealsList = ({ title, deals }) => {
  return (
    <Container>
      <h1 className='h2 font-weight-bold text-center mb-5'>{title}</h1>

      <Row className='justify-content-center'>
        {deals.map((deal, index) => (
          <Col key={index} md={5} lg={3}>
            <DealItem
              title={deal.name}
              image={deal.image}
              detailLink={`/food-deals/${deal.slug}/`}
            >
              <h3 className='title'>{deal.name}</h3>
              <p className='desc'>{deal.description}</p>
              <h6 className='delivery-time text-color-primary'>
                {deal.deliveryTime}
              </h6>
            </DealItem>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

DealsList.defaultProps = {
  title: 'Our Popular Deals',
  deals: [],
};

export default DealsList;
