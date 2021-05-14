import Container from 'react-bootstrap/Container';

import FaqItem from './FaqItem';

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
        {items.map((item) => (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </Container>
  </section>
);

export default FaqsList;
