import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';

const StepsList = dynamic(() => import('../../components/StepsList'));
const MonthlyMenu = dynamic(() => import('../../components/MonthlyMenu'));
const FaqsList = dynamic(() => import('../../components/FaqsList'));
const WeeklyTrial = dynamic(() => import('../../components/WeeklyTrial'));
const HeadMeta = dynamic(() => import('../../components/HeadMeta'));

const steps = [
  {
    title: `Click on Order Now`,
    img: `/assets/img/order-now-click.svg`,
  },
  {
    title: `Pay via Bank Transfer`,
    img: `/assets/img/bank-transfer-icon.svg`,
  },
  {
    title: `Enjoy the Food`,
    img: `/assets/img/food-test.svg`,
  },
];

const MonthlyMenuDetail = ({ menu }) => {
  const faqs = [
    {
      question: 'Who will deliver me food?',
      answer: `You get food by families near you. living in 5-10 KMs in your area.`,
    },
    {
      question: `What If I am not available or subscribe
      in middle or end of the month?`,
      answer: `Our packages do not expire like Telco
      companies. We deliver you complete days.
      If you are not available on any day, let
      us know (1 day) in advance and we’ll
      record and deliver that meal to you on
      later days. In Economy package, Mazedar,
      Office, and Hostel package you ll get
      food for 22 days after subscription.`,
    },
    {
      question: 'How to pay for food?',
      answer: `You can pay via Bank Transfer,
      credit/debit card in advance.`,
    },
    {
      question: 'How to Order?',
      answer: `1- Click on the ORDER NOW BUTTON below
      your favorite menu <br>
      2- Fill in your DELIVERY ADDRESS and
      information <br>
      3- Wait for our CONFIRMATION CALL/EMAIL
      or notify us at 0333 518 9005
      <br>`,
    },
  ];

  const router = useRouter();

  const { slug } = router.query;

  let weeklyPrice = 1750;

  if (slug === 'seher-menu') {
    weeklyPrice = 2250;
  } else if (slug === 'iftar-and-dinner') {
    weeklyPrice = 3000;
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeadMeta
        name={`${menu.name} - Monthly Menu`}
        title={`${menu.name} | ${menu.priceCurrency} ${menu.price} |Homemade lunch and dinner delivery service - Islamabad LHR KHI`}
        desc={`${menu.name} - Lunch.pk is your #1 choice for tasty and healthy homemade food delivered by families near you. Lhr, Isb, and Khi`}
        currentUrl={router.pathname}
      />

      <section
        style={{
          background: '#f5f8fa',
          padding: '3.125rem 0 3.125rem',
        }}
      >
        <Container>
          {Object.keys(menu).length ? (
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
          ) : (
            ''
          )}
        </Container>
      </section>

      <section
        className='text-white text-center'
        style={{
          background: 'linear-gradient(45deg,#00a4bd,#00bda5)',
          padding: '4.375rem 0 3.125rem',
        }}
      >
        <Container>
          <h2 className='font-weight-bold'>
            Your Payment and Quality is Ensured
          </h2>
          <p className='my-4'>
            We ensure quality of food and services. we hold your payment in
            company account until you are delivered <br /> complete days and
            satisfied with food provided. You are no longer limited to one
            kitchen, we have number of <br /> family kitchens near you to meet
            your needs.
          </p>
          <Link href={`/place-an-order/${menu._id}/MonthlyMenu`}>
            <a className='cta-btn cta-lg cta-btn-primary'>Order Now</a>
          </Link>
        </Container>
      </section>

      <StepsList
        title='Order in <span class="text-color-primary">3 Simple Steps</span>'
        steps={steps}
      />

      <FaqsList title='Frequently Asked Questions' items={faqs} />

      <WeeklyTrial menuId={menu._id} price={weeklyPrice} />
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RAPI_HOST}/api/monthly-menus/${context.params.slug}`
  );
  const menu = await res.json();

  return {
    props: {
      menu,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RAPI_HOST}/api/monthly-menus`
  );
  const menus = await res.json();

  const slugs = menus.map((menu) => menu.slug);

  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: true,
  };
};

export default MonthlyMenuDetail;
