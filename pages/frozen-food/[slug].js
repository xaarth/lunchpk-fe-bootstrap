import axios from 'axios';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';

const Testimonials = dynamic(() => import('../../components/Testimonials'));
const HeadMeta = dynamic(() => import('../../components/HeadMeta'));

const FrozenFoodDetail = ({ deal }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeadMeta
        name={`${deal.name} - Frozen Food`}
        title={`${deal.name} | Home delivery by lunch.pk - Lahore , Islamabad, Karachi`}
        desc={`Have no time for cooking or tired of low quality food. Enjoy Lunch.pk tasty ${deal.name} deal delivered to your door. Lahore, Islamabad and Karachi`}
        currentUrl={router.pathname}
      />
      <section style={{ padding: '7rem 0' }}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className='position-sticky' style={{ top: '100px' }}>
                <Image
                  className='rounded pr-4'
                  src={deal.image}
                  width={700}
                  height={400}
                />
              </div>
            </Col>
            <Col className='align-self-center' lg={6}>
              <div className='position-sticky' style={{ top: '100px' }}>
                <h1 className='font-weight-bold mb-4'>{deal.name}</h1>
                <h4 className='mb-3'>
                  {deal.priceCurrency} {deal.price}
                </h4>
                <p className='mb-2'>{deal.pieces} pieces</p>
                <p className='font-weight-bold mb-3'>
                  Its not just TASTY. Its HEALTHY too!
                </p>
                <p className='mb-4' style={{ fontSize: '1rem' }}>
                  {deal.deliveryTime}
                </p>
                <Link href={`/place-an-order/${deal._id}/FrozenFood`}>
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
