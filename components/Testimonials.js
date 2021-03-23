import { useEffect, useState } from 'react';
import TestimonialList from './TestimonialList';

const Testimonials = ({ title }) => {
  const [testimonails, setTestimonails] = useState([]);

  useEffect(() => {
    const getTestimonials = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_RAPI_HOST}/api/testimonials`
      );
      return await res.json();
    };

    getTestimonials().then((data) => setTestimonails(data));
  }, []);

  return <TestimonialList title={title} items={testimonails} />;
};

export default Testimonials;
