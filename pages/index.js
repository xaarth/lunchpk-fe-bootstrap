import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Showcase = dynamic(() => import('../components/Showcase'));
const StepsList = dynamic(() => import('../components/StepsList'));
const HomeInfo = dynamic(() => import('../components/HomeInfo'));
const HomeCorporateMenu = dynamic(() =>
  import('../components/HomeCorporateMenu')
);
const HomeMenus = dynamic(() => import('../components/HomeMenus'));
const HomeFoodlancer = dynamic(() => import('../components/HomeFoodlancer'));
const Testimonials = dynamic(() => import('../components/Testimonials'));
const HeadMeta = dynamic(() => import('../components/HeadMeta'));

const steps = [
  { title: `Choose a Menu`, img: '/assets/img/menu-icon.svg' },
  { title: `Place your Order`, img: '/assets/img/clipboard.svg' },
  { title: `Enjoy your Food`, img: '/assets/img/yummy-icon.svg' },
];

export default function Home() {
  const [location, setLocation] = useState('Near You');

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (query.loc) {
      setLocation(`in ${query.loc}`);
    }
  }, [query]);

  return (
    <>
      <HeadMeta
        name='Home'
        title='Order Homemade Food Online - Lunch Dinner - Islamabad'
        desc='Lunch.pk is Pakistan #1 website to order homemade food, lunch and dinner online. Available in Lahore, Karachi, Islamabad, Rawalpindi and more.'
        currentUrl={router.pathname}
      />

      <Showcase
        title={`Homemade Food by Families ${location}`}
        desc={`At Lunch.pk, You get homemade food by local families ${location.toLowerCase()}. We provide <strong>REAL HYGIENIC</strong> homemade food delivered to your doorstep. Available in Islamabad, Lahore, Karachi and more`}
        imgSrc='/assets/img/hero-char.webp'
        btnVariant='cta-btn cta-btn-primary cta-btn-lg'
        btnText='See Our Menu'
        btnLink='/monthly-menu'
      />

      <StepsList
        title='Order in <span class="text-color-primary">3 Simple Steps</span>'
        ctaText='Payment: Bank transfer (recommended), Cash to Rider, EasyPaisa'
        steps={steps}
      />

      <HomeInfo />

      <HomeCorporateMenu />

      <HomeMenus />

      <HomeFoodlancer />

      <section
        style={{ padding: '4.375rem 0 3.125rem', background: '#f5f8fa' }}
      >
        <Testimonials title='People are talking' />
      </section>
    </>
  );
}
