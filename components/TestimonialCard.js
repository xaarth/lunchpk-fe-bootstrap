import styles from '../styles/Testimonial.module.scss';

const TestimonialCard = ({ comment, name }) => {
  return (
    <div className={styles['testimonial-card']}>
      <div className={styles.text}>
        <p>{comment}</p>
      </div>
      <div className={styles.meta}>
        <h5>{name}</h5>
      </div>
    </div>
  );
};

export default TestimonialCard;
