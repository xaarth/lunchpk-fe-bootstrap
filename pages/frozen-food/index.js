import FrozenFoodsList from '../../components/FrozenFoodsList';
import Testimonials from '../../components/Testimonials';
import DealsSocialProof from '../../components/DealsSocialProof';

const FrozenFood = ({ frozenFoods }) => {
  return (
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
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RAPI_HOST}/api/frozen-foods`
  );
  const frozenFoods = await res.json();

  return {
    props: {
      frozenFoods,
    },
  };
};

export default FrozenFood;
