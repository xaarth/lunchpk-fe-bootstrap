import dynamic from 'next/dynamic';

const TestimonialList = dynamic(() => import('./TestimonialList'));

const testimonails = [
  {
    name: 'Muhammad Usman',
    text: `Its been a week I am using their service and I have found them to be extremely punctual, professional and accommodating towards their customers. The food tastes great, just like homemade food, it's clean. Highly recommended!`,
  },
  {
    name: 'Arsalan Ajmal',
    text: `I'm using their service since last 3 months and found them best at service and food quality. All i needed was the quality and hygienic food, which mash Allah i found in their food. So they are deserved to be appreciated. Love the service.`,
  },
  {
    name: 'Shahzeb Khan',
    text: `Just started availing their lunch service and found it up to my mark. The taste was amazing, food sounded hygienic and was delivered on time. Keep it up`,
  },
  {
    name: 'Ahmed Awais',
    text: `I have subscribed to a custom monthly package. The food is tasty (mostly, I'm a bit choosy). Their behavior and care for clients is really what I was sold at. Especially people who are dealing with Lahore's section are really cool!`,
  },
  {
    name: 'Huma Zarar',
    text: `Ordered lunch for my staff today for the first time. Superb Khana and very hygienic packing! Satisfied!!!!`,
  },
  {
    name: 'Zahra Ambreen',
    text: `First experience with lunch.pk was good. The family cooked meals with specific instructions for my elderly diabetic father. Second experience is not at par with the first. Response from lunch.pk is slow and food delivered is low quality and very expensive.`,
  },
];

const Testimonials = ({ title }) => (
  <TestimonialList title={title} items={testimonails} />
);

export default Testimonials;
