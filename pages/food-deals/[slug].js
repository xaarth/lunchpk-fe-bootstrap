import { Container, Row, Col, Image } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Testimonials from '../../components/Testimonials';
import axios from 'axios';
import Link from 'next/link';

const FoodDealDetail = ({ deal }) => {
  const router = useRouter();

  const [servings, setServings] = useState(3);

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
            <Col lg={6}>
              <div className='position-sticky' style={{ top: '100px' }}>
                <h1 className='font-weight-bold'>{deal.name}</h1>
                <div className='d-flex my-4'>
                  <button
                    onClick={() => setServings(3)}
                    className={`${
                      servings === 3 ? 'active' : ''
                    } cta-btn cta-btn-outline-primary mr-3`}
                  >
                    3 Servings
                  </button>
                  <button
                    onClick={() => setServings(5)}
                    className={`${
                      servings === 5 ? 'active' : ''
                    } cta-btn cta-btn-outline-primary`}
                  >
                    5 Servings
                  </button>
                </div>
                <h4 className='mb-3'>
                  {deal.priceCurrency}{' '}
                  {servings === 3 ? deal.priceThreeServ : deal.priceFiveServ}
                </h4>
                <p className='mb-2'>{deal.description}</p>
                <p className='font-weight-bold mb-2'>
                  Its not just TASTY. Its HEALTHY too!
                </p>
                <p style={{ fontSize: '1rem' }}>{deal.deliveryTime}</p>
                <Link href={`/place-an-order/${deal._id}/dailyDeal`}>
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
    `${process.env.NEXT_PUBLIC_RAPI_HOST}/api/daily-deals/${params.slug}`
  );

  return {
    props: {
      deal: data,
    },
  };
};

export const getStaticPaths = async () => {
  const { data: deals } = await axios.get(
    `${process.env.NEXT_PUBLIC_RAPI_HOST}/api/daily-deals`
  );

  const slugs = deals.map((deal) => deal.slug);

  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: true,
  };
};

export default FoodDealDetail;
