import axios from 'axios';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import HeadMeta from '../../components/HeadMeta';

const ThankYou = ({ order }) => {
  const router = useRouter();

  return (
    <>
      <HeadMeta
        name='Thank you for your order'
        title='Thank you for your | Lunch.pk'
        desc={`Lunch.pk is Pakistan's best website to Order homemade food online. Available in Lhr, Isb, Khi, Rwp and More`}
        currentUrl={router.pathname}
      />
      <section
        style={{
          background: 'rgb(246, 244, 240) none repeat scroll 0% 0%',
          padding: '7rem 0px',
          color: 'rgb(33, 37, 41)',
          position: 'relative',
        }}
      >
        <Container>
          {Object.keys(order).length ? (
            <Col className='mx-auto' lg={9}>
              <h1 className='font-weight-bold text-center mb-4'>
                Thank You For Your Order
              </h1>
              <div
                style={{ maxWidth: '290px' }}
                className='bg-white mx-auto my-4 text-center rounded px-2 py-3 mb-4'
              >
                <h6 className='text-muted mb-2'>Your confirmation code is:</h6>
                <h2 className='font-weight-bold'>{order.confirmationCode}</h2>
              </div>
              <h5 className='text-center mb-4' style={{ fontWeight: '600' }}>
                Please Whatsapp your confirmation code at +92 333 5189005 to
                complete your order
              </h5>
              <p className=''>
                Note: Lunch.pk is not responsible for payment in cash or direct
                to Anyone. We only accept bank transfer <br /> as the mentioned
                payment method on your invoice
              </p>
            </Col>
          ) : null}
        </Container>
      </section>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_RAPI_HOST}/api/orders/${params.orderId}`
    );

    return {
      props: {
        order: data,
      },
    };
  } catch (err) {
    return {
      props: {
        order: {},
      },
    };
  }
};

export default ThankYou;
