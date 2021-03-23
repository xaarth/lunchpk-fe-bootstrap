import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import Testimonials from '../../components/Testimonials';
import { Image } from 'react-bootstrap';

const FrozenFoodDetail = ({ deal }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section style={{ padding: '7rem 0' }}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className='position-sticky' style={{ top: '100px' }}>
                <Image className='rounded pr-4' src={deal.image} fluid />
              </div>
            </Col>
            <Col className='align-self-center' lg={6}>
              <div className='position-sticky' style={{ top: '100px' }}>
                <h1 className='font-weight-bold mb-4'>{deal.name}</h1>
                <h4 className='mb-3'>
                  {deal.priceCurrency} {deal.price}
                </h4>
                <p className='mb-4'>{deal.description}</p>
                <p className='font-weight-bold mb-3'>
                  Its not just TASTY. Its HEALTHY too!
                </p>
                <p className='mb-4' style={{ fontSize: '1rem' }}>
                  {deal.deliveryTime}
                </p>
                <Link href={`/place-an-order/${deal._id}/frozenFood`}>
                  <a className='cta-btn cta-btn-primary'>Order Now</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ padding: '5rem 0', background: 'rgb(245, 248, 250)' }}>
        <Testimonials title='People are talking' />
      </section>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_RAPI_HOST}/api/frozen-foods/${params.slug}`
  );

  return {
    props: {
      deal: data,
    },
  };
};

export const getStaticPaths = async () => {
  const { data: deals } = await axios.get(
    `${process.env.NEXT_PUBLIC_RAPI_HOST}/api/frozen-foods`
  );

  const slugs = deals.map((deal) => deal.slug);

  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: true,
  };
};

export default FrozenFoodDetail;
