import Showcase from '../components/Showcase';
import StepsList from '../components/StepsList';
import HomeInfo from '../components/HomeInfo';
import HomeCorporateMenu from '../components/HomeCorporateMenu';
import HomeMenus from '../components/HomeMenus';
import HomeFoodlancer from '../components/HomeFoodlancer';
import Testimonials from '../components/Testimonials';
import HeadMeta from '../components/HeadMeta';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
  const steps = [
    { title: `Choose a Menu`, img: '/assets/img/menu-icon.svg' },
    { title: `Place your Order`, img: '/assets/img/clipboard.svg' },
    { title: `Enjoy your Food`, img: '/assets/img/yummy-icon.svg' },
  ];

  const [location, setLocation] = useState('Near You');

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (query.loc) {
      let location = query.loc;
      setLocation(`in ${location}`);
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
        imgSrc='/assets/img/hero-char.png'
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
