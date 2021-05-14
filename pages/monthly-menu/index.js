import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';

const HeadMeta = dynamic(() => import('../../components/HeadMeta'));
const MonthlyMenu = dynamic(() => import('../../components/MonthlyMenu'));

const MonthlyMenus = ({ menus }) => {
  const router = useRouter();

  return (
    <>
      <HeadMeta
        name='Monthly Menus'
        title='Homemade Food - Lunch Dinner - order food online Islamabad, Lahore, Karachi'
        desc='Economy Menu. You will get 4 chapati, 2 dish ( 2 persons serving ) , salad, raita delivered at your doorstep. PKR 8500'
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
