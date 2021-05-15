import axios from 'axios';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';

import HeadMeta from '../../components/HeadMeta';
import MonthlyMenu from '../../components/MonthlyMenu';

const MonthlyMenus = ({ menus }) => {
  const router = useRouter();

  return (
    <>
      <HeadMeta
        name='Monthly Menus'
        title='Homemade Food - Lunch Dinner - order food online Islamabad, Lahore, Karachi'
        desc='Lunch.pk is Pakistan #1 website to order homemade food. You get tasty and healthy food cooked and delivered by families near you.'
        currentUrl={router.pathname}
      />
      <section
        style={{
          background: '#f5f8fa',
          padding: '3.125rem 0 3.125rem',
        }}
      >
        <Container>
          {menus.map((menu) => (
            <MonthlyMenu
              key={menu._id}
              name={menu.name}
              desc={menu.description}
              price={`${menu.priceCurrency} ${menu.price}`}
              orderLink={`/place-an-order/${menu._id}/MonthlyMenu`}
              week1Menu={menu.week1Menu}
              week2Menu={menu.week2Menu}
              week3Menu={menu.week3Menu}
              week4Menu={menu.week4Menu}
            />
          ))}
        </Container>
      </section>
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_RAPI_HOST}/api/monthly-menus`
    );

    return {
      props: {
        menus: data,
      },
      revalidate: 60,
    };
  } catch (err) {
    return {
      props: {
        menus: [],
      },
    };
  }
};

export default MonthlyMenus;
