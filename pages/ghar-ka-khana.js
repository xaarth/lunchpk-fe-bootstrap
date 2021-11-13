import { useRouter } from 'next/router';

import Showcase from '../components/Showcase';
import StepsList from '../components/StepsList';
import HomeInfo from '../components/HomeInfo';
import HomeCorporateMenu from '../components/HomeCorporateMenu';
import HomeMenus from '../components/HomeMenus';
import HomeFoodlancer from '../components/HomeFoodlancer';
import Testimonials from '../components/Testimonials';
import HeadMeta from '../components/HeadMeta';

const steps = [
  { title: `Choose a Menu`, img: '/assets/img/menu-icon.svg' },
  { title: `Place your Order`, img: '/assets/img/clipboard.svg' },
  { title: `Enjoy your Food`, img: '/assets/img/yummy-icon.svg' },
];

export default function Home() {
  const router = useRouter();

  return (
    <>
      <HeadMeta
        name='Home'
        title='Ghar ka khana - Lunch Dinner - Homemade Food Delivery Service in Islamabad, Lahore, Karachi'
        desc='Lunch.pk is Pakistan #1 to order ghar ka khana. You get tasty and healthy food cooked and delivered by families near you. lahore karachi islamabad'
        currentUrl={router.pathname}
      />

      <Showcase
        title='Order Ghar ka khana by Families Near You'
        desc={
          <p>
            At Lunch.pk, You get <strong>Ghar ka khana</strong> by local
            families near you. We provide <strong>REAL HYGIENIC</strong> ghar ka
            khana delivered to your door. Available in Islamabad, Lahore,
            Karachi and more
          </p>
        }
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

      <HomeCorporateMenu title='Order Ghar ka Khana For Your Office' />

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
