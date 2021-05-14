import dynamic from 'next/dynamic';
import Container from 'react-bootstrap/Container';

const FaqItem = dynamic(() => import('./FaqItem'));

const FaqsList = ({ title, items }) => (
  <section
    className=''
    style={{
      padding: '4.375rem 0 3.125rem',
    }}
  >
    <Container>
      <h2 className='font-weight-bold mb-5'>{title}</h2>
      <div className='faq-items'>
        {items.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </Container>
  </section>
);

export default FaqsList;
