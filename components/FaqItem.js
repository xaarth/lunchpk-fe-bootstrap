const Faq = ({ question, answer }) => (
  <div className='faq-item mb-5'>
    <h5>{question}</h5>
    <p style={{ width: '85%' }} dangerouslySetInnerHTML={{ __html: answer }} />
  </div>
);

export default Faq;
