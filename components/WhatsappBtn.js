import Image from 'next/image';

const WhatsappBtn = ({ ...props }) => {
  return (
    <a
      class='cta-btn cta-whatsapp cta-btn-dark cta-btn-lg'
      {...props}
      target='_self'
      href='https://wa.me/923335189005?text=I\%27m%20interested%20in%20your%20food'
    >
      Whatsapp Now
    </a>
  );
};

export default WhatsappBtn;
