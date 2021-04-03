import Container from 'react-bootstrap/Container';
import MonthlyMenu from '../components/MonthlyMenu';
import axios from 'axios';
import HeadMeta from '../components/HeadMeta';
import { useRouter } from 'next/router';

const RamzanSpecial = ({ iftarMenu, seherMenu }) => {
  const router = useRouter();

  if (Object.keys(iftarMenu) && Object.keys(seherMenu)) {
    return (
      <>
        <HeadMeta
          name='Ramazan Special'
          title={`Best Seher, Iftar and Dinner Deal. Homemade iftar and dinner delivery. Available in Islamabad, Karachi, and Lahore`}
          desc={`Seher, Iftar and Dinner Menu. 1 person serving, 1 paratha, 1 chapati, and free delivery. PKR 8500`}
          currentUrl={router.pathname}
        />

        <section
          style={{
            background: '#f5f8fa',
            padding: '3.125rem 0 3.125rem',
          }}
        >
          <Container>
            <MonthlyMenu
              key={iftarMenu._id}
              name={iftarMenu.name}
              desc={iftarMenu.description}
              price={`${iftarMenu.priceCurrency} ${iftarMenu.price}`}
              orderLink={`/place-an-order/${iftarMenu._id}/MonthlyMenu`}
              week1Menu={iftarMenu.week1Menu}
              week2Menu={iftarMenu.week2Menu}
              week3Menu={iftarMenu.week3Menu}
              week4Menu={iftarMenu.week4Menu}
            />

            <MonthlyMenu
              key={seherMenu._id}
              name={seherMenu.name}
              desc={seherMenu.description}
              price={`${seherMenu.priceCurrency} ${seherMenu.price}`}
              orderLink={`/place-an-order/${seherMenu._id}/MonthlyMenu`}
              week1Menu={seherMenu.week1Menu}
              week2Menu={seherMenu.week2Menu}
              week3Menu={seherMenu.week3Menu}
              week4Menu={seherMenu.week4Menu}
            />
          </Container>
        </section>
      </>
    );
  } else {
    return <h2 className='py-5'>Loading...</h2>;
  }
};

export const getStaticProps = async () => {
  const { data: seherMenu } = await axios.get(
    `${process.env.NEXT_PUBLIC_RAPI_HOST}/api/monthly-menus/seher-menu`
  );

  const { data: iftarMenu } = await axios.get(
    `${process.env.NEXT_PUBLIC_RAPI_HOST}/api/monthly-menus/iftar-and-dinner`
  );

  return {
    props: {
      seherMenu,
      iftarMenu,
    },
  };
};

export default RamzanSpecial;
