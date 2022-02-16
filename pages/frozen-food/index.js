import { useRouter } from 'next/router';
import axios from 'axios';

import HeadMeta from '../../components/HeadMeta';
import FrozenFoodsList from '../../components/FrozenFoodsList';
import DealsSocialProof from '../../components/DealsSocialProof';
import Testimonials from '../../components/Testimonials';

const FrozenFood = ({ frozenFoods }) => {
  const router = useRouter();

  return (
    <>
      <HeadMeta
        name='Frozen Foods'
        title='Frozen food delivery, homemade, Islamabad, Lahore , Karachi'
        desc='Lunch.pk is the best website frozen food delivery, in islamabad lahore and karachi.'
        currentUrl={router.pathname}
      />
      <section
        className=''
        style={{
          background: '#f5f8fa',
          padding: '4.375rem 0 3.125rem',
        }}
      >
        {frozenFoods.length ? (
          <FrozenFoodsList title='Frozen Foods' deals={frozenFoods} />
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
    </>
  );
};

export const getStaticProps = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_RAPI_HOST}/api/frozen-foods`
  );

  return {
    props: {
      frozenFoods: data.results,
    },
    revalidate: 10,
  };
};

export default FrozenFood;
