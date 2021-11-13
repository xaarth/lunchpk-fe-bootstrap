const Faq = ({ question, answer }) => (
  <div className='faq-item mb-5'>
    <h5>{question}</h5>

    <p style={{ width: '85%' }}>{answer}</p>
  </div>
);

export default Faq;
