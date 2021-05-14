import Showcase from '../../components/Showcase';
import StepsList from '../../components/StepsList';
import YoutubeVideosList from '../../components/YoutubeVideosList';
import FaqsList from '../../components/FaqsList';
import HeadMeta from '../../components/HeadMeta';
import { useRouter } from 'next/router';

const BecomeAFoodlancer = () => {
  const steps = [
    {
      title: `Fill The Form`,
      desc: `Fill the form by clicking the join us button below`,
      img: `/assets/img/form.svg`,
    },
    {
      title: `Send your Kitchen Pics`,
      desc: `Send us 3 pictures of your kitchen on whatsapp at +92 335 5517720`,
      img: `/assets/img/kitchen-pictures.svg`,
    },
    {
      title: `Food Test`,
      desc: `Get your food tested by our food reviewer near you`,
      img: `/assets/img/food-test.svg`,
    },
  ];

  const faqs = [
    {
      question: 'Who is our ideal team member?',
      answer: `We are following 2 simple prinicples. #1 Serve hygienic tasty homemade food #2 Empower food passionate woman If food is your craft and you don’t settle with average taste… you are someone who cooks from the heart… then you are in the right place, we are waiting for you to join our food passionate family. Lets thrive together!`,
    },
    {
      question: 'Who is a foodlancer?',
      answer: `You probably have heard about freelancer right! <br />
      A foodlancer is self employed person who offers his food services to any company or individuals he/she wants to. All women who have a passion of cooking and want to make money from home via lunch.pk are referred as foodlancers.`,
    },
    {
      question: 'How a woman can sell food online using lunch.pk?',
      answer: `The hardest part of any business is selling and getting customers. No matter what you do and wherever you are if you have no sales you will be out of business soon.
      at lunch.pk we took this burden off your shoulders. We provide our foodlancer women guaranteed customers near their location. you get guaranteed sale/money into your pocket using our homemade food portal. `,
    },
    {
      question: 'How much a foodlancer can make money in a month?',
      answer: `Our foodlancers have 3 levels , your level will be decided as per customer feedback. Please note that, we do not allow restaurants and hotels to register even you pay FEE.`,
    },
    {
      question: 'How to apply as a foodlancer?',
      answer: `Joining lunch.pk is a simple 5 step process. <br />
      1- Fill in the register form <br />
      2- Send us 3 snaps of your kitchen from different angles on whatsapp at +92 335 5517720 <br />
      3- Let our team test 3 different demo dishes and visit your kitchen <br />
      4- Ability to use facebook messenger, whatsapp and emails <br />
      5- Have a rider available either from your family or 3rd party companies to deliver food within 5-10 KMs of your area.`,
    },
    {
      question: 'How to get quick approval as a food lancer?',
      answer: `If you’ll follow and complete the above 5 steps, you will get quick approval.`,
    },
    {
      question: 'How to not get suspended or rejected at lunch.pk?',
      answer: `Since we are on a mission to serve healthy hygienic food. We do not tolerate any complaints related to hygiene. We also do not appreciate negating our processes and policies.`,
    },
    {
      question: 'What is lunch.pk fee or charges?',
      answer: ` Not only we want to serve the best healthy homemade food, But we also have a mission to empower women with true home based business. We believe we can only grow by helping you grow at a massive level. <br /> We have RS 2000/- joining fee when you are approved. We do not offer FREE membership as FREE is never appreciated and this small fee is to filter out non serious candidates. We charge you 15% of the gross sale provided to you by lunch.pk We charge you 15% of the gross sale provided to you by lunch.pk `,
    },
    {
      question: 'How to qualify as professional or an expert level foodlancer?',
      answer: `All foodlancers with 95% plus positive feedback and having ability to retain their customers for long term (3-6 months+) get promoted to an expert level. at an expert level you get more sales and customers by the company.`,
    },
    {
      question: 'How helpful is lunch.pk for women?',
      answer: `Since we are on a mission to empower women. We are putting our best efforts to make you grow and succeed. For example, most of the running businesses charge you heavy upfront franchise fee plus a monthly fee. <br /> Additional to initial investment they charge you minimum 25% to 50% of the sale with no guarantee of any sales amount. at lunch.pk, we are looking to create win-win relationships and help you grow fast. For the same reasons there is no upfront HUGE Franchise deposit and security deposits. You can setup your own account by paying RS 2000 per month and 15% of the gross sale.`,
    },
    {
      question: 'What are your future plans?',
      answer: `Our mission to facilitate you as much as we can. in our future plan, we will facilitate with you with grocery at wholesale price at your doorstep as well as rider resources available 24/7.`,
    },
    {
      question: 'Where to send our suggestions?',
      answer: `We highly welcome your suggestions and love positive feedback. Feel free to send your suggestions and feedback at info@lunch.pk or by the contact us form.`,
    },
  ];

  const videos = [
    { title: 'Foodlaner 1', url: 'https://www.youtube.com/embed/1DtpVa9sYP4' },
    { title: 'Foodlaner 2', url: 'https://www.youtube.com/embed/-9CPDNJpGMw' },
    { title: 'Foodlaner 3', url: 'https://www.youtube.com/embed/zL9C6LEyIUM' },
    { title: 'Foodlaner 4', url: 'https://www.youtube.com/embed/JQ_oDYD3ybk' },
  ];

  const router = useRouter();

  return (
    <>
      <HeadMeta
        name='Become a Foodlancer'
        title={`Sell homemade food online at lunch.pk - Become a Foodlancer`}
        desc={`Lunch.pk offers you guaranteed customers in your area. Turn your cooking passion into your business. Become a foodlancer and start your home based business.`}
        currentUrl={router.pathname}
      />
      <Showcase
        title='Join Our Food Passionate Family!'
        desc='If food is your craft and you don’t settle with average taste. you are someone who cooks from the heart. then you are in the right place, we are waiting for you to join our food passionate family. <br /> <span class="d-block mt-3 font-weight-bold">No Investments, No Security Deposits, No Lengthy Procedures</span>'
        imgSrc='/assets/img/make-money.webp'
        btnVariant='cta-btn cta-btn-primary cta-btn-lg'
        btnText='Apply Now'
        btnLink='/make-money/apply-for-foodlancer/'
        bg='url("/assets/img/hero-img-2.jpg") center center/cover'
        textColor='#fff'
        overlay='rgba(0, 0, 0, 0.7)'
      />

      <StepsList
        title='Join Lunch.pk in <span class="text-color-primary">3 Simple Steps</span>'
        steps={steps}
        ctaBtn='Join Us'
        ctaBtnLink='/make-money/apply-for-foodlancer/'
      />

      <YoutubeVideosList title='People are talking' videos={videos} />

      <FaqsList
        title='Join our Team and Start Selling Homemade Food'
        items={faqs}
      />
    </>
  );
};

export default BecomeAFoodlancer;
