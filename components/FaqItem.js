const Faq = ({ question, answer }) => {
  return (
    <div className="faq-item mb-5">
      <h5>{question}</h5>
      <p
        style={{ width: "85%" }}
        dangerouslySetInnerHTML={{ __html: answer }}
      ></p>
    </div>
  );
};

export default Faq;
