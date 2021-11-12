import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import HeadMeta from '../components/HeadMeta';

const NotFound = () => {
  const router = useRouter();

  return (
    <>
      <HeadMeta
        name='Not Found'
        title={`An Error Occurred: This page doesn't exist.`}
        desc={`An Error Occurred: This page doesn't exist. Redirecting you to home`}
        currentUrl={router.pathname}
      />
      <section className='bg-light' style={{ padding: '8rem 0' }}>
        <Container>
          <div className='text-center'>
            <Image className='mb-4' src='/assets/img/error.png' height='180' />
            <h1 className='h2 mb-3'>This page doesn't exist.</h1>
            <button
              type='button'
              onClick={() => window.history.back()}
              className='btn btn-link mb-2'
            >
              Go Back
            </button>
            <p>Error 404 (OS)</p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NotFound;
