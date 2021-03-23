import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, Image } from 'react-bootstrap';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <section className='bg-light' style={{ padding: '8rem 0' }}>
      <Container>
        <div className='text-center'>
          <Image className='mb-4' src='/assets/img/error.png' height='180' />
          <h1 className='h2 mb-4'>This page doesn't exist.</h1>
          <h4 className='mb-4'>Redirecting you to the homepage...</h4>
          <p>Error 404 (OS)</p>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
