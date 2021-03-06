import { useRouter } from 'next/router';
import axios from 'axios';

import HeadMeta from '../../components/HeadMeta';
import DailyDealsList from '../../components/DailyDealsList';
import Testimonials from '../../components/Testimonials';
import DealsSocialProof from '../../components/DealsSocialProof';

const FoodDeals = ({ dailyDeals }) => {
  const router = useRouter();

  return (
    <>
      <HeadMeta
        name='Food Deals'
        title='Homemade Tasty Food Delivery in Lahore, Karachi and Islamabad'
        desc={`Lunch.pk is Pakistan's best website to Order homemade food online. order homemade lunch to your office or home. delivery in Lahore, Islamabad, Karachi and More`}
        currentUrl={router.pathname}
      />
      <section
        className=''
        style={{
          background: '#f5f8fa',
          padding: '4.375rem 0 3.125rem',
        }}
      >
        {dailyDeals.length ? (
          <DailyDealsList title='Daily Deals' deals={dailyDeals} />
        ) : null}

        <DealsSocialProof />

        <section
          style={{ padding: '4.375rem 0 3.125rem', background: '#f5f8fa' }}
        >
          <Testimonials title='People are talking' />
        </section>
      </section>
    </>
  );
};

export const getStaticProps = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_RAPI_HOST}/api/daily-deals`
  );

  return {
    props: {
      dailyDeals: data.results,
    },
    revalidate: 10,
  };
};

export default FoodDeals;
