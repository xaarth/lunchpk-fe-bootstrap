import DailyDealsList from '../../components/DailyDealsList';
import Testimonials from '../../components/Testimonials';
import DealsSocialProof from '../../components/DealsSocialProof';

const FoodDeals = ({ dailyDeals }) => {
  return (
    <section
      className=''
      style={{
        background: '#f5f8fa',
        padding: '4.375rem 0 3.125rem',
      }}
    >
      {dailyDeals.length ? (
        <DailyDealsList title='Daily Deals' deals={dailyDeals} />
      ) : (
        ''
      )}

      <DealsSocialProof />

      <section
        style={{ padding: '4.375rem 0 3.125rem', background: '#f5f8fa' }}
      >
        <Testimonials title='People are talking' />
      </section>
    </section>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RAPI_HOST}/api/daily-deals`
  );
  const dailyDeals = await res.json();

  return {
    props: {
      dailyDeals,
    },
  };
};

export default FoodDeals;
