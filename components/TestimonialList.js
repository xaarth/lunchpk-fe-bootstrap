import TestimonialCard from './TestimonialCard';
import { Col, Container, Row } from 'react-bootstrap';

const TestimonialList = ({ title, items }) => {
  return (
    <Container>
      {title ? (
        <h2 className='h1 text-center font-weight-bold mb-4'>
          People are talking
        </h2>
      ) : null}

      <Row>
        {items.map((user, index) => (
          <Col key={index} md={4}>
            <TestimonialCard name={user.name} comment={user.text} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

TestimonialList.defaultProps = {
  items: [],
};

export default TestimonialList;
