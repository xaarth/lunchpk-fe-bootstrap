import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import TestimonialCard from './TestimonialCard';

const TestimonialList = ({ title, items }) => (
  <Container>
    {title ? (
      <h2 className='h1 text-center font-weight-bold mb-4'>
        People are talking
      </h2>
    ) : null}

    <Row className='justify-content-center'>
      {items.map((user) => (
        <Col key={user.text} className='align-self-center' md={6} lg={4}>
          <TestimonialCard name={user.name} comment={user.text} />
        </Col>
      ))}
    </Row>
  </Container>
);

TestimonialList.defaultProps = {
  items: [],
};

export default TestimonialList;
