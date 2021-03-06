import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TosPoint = ({ title, children }) => (
  <div className='mb-5'>
    <Row>
      <Col className='mb-4' lg={5}>
        <h2
          className='position-sticky font-weight-bold'
          style={{ fontSize: '2rem', maxWidth: '85%', top: '100px' }}
        >
          {title}
        </h2>
      </Col>
      <Col className='mb-5' lg={7}>
        {children}
      </Col>
    </Row>
  </div>
);

export default TosPoint;
