import Spinner from 'react-bootstrap/Spinner';

const Loader = () => (
  <div className='text-center' style={{ height: '300px' }}>
    <Spinner animation='border' variant='dark' />
  </div>
);

export default Loader;
