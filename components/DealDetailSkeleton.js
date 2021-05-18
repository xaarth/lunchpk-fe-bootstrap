import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Skeleton from 'react-loading-skeleton';

const DealDetailSkeleton = () => (
  <Row>
    <Col lg={6}>
      <Skeleton width={500} height={300} />
    </Col>
    <Col lg={6}>
      <Skeleton className='mb-3' height={20} />
      <Skeleton className='mb-3' height={30} />
      <Skeleton className='mb-3' width={120} height={20} />
      <Skeleton className='mb-3' count={4} />
      <Skeleton className='mb-3' width={150} height={30} />
    </Col>
  </Row>
);

export default DealDetailSkeleton;
