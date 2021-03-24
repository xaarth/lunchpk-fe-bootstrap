import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import StepCard from './StepCard';

const StepsList = ({ title, ctaText, ctaBtn, ctaBtnLink, steps }) => {
  return (
    <section
      className='text-center '
      style={{ padding: '4.375rem 0 3.125rem', background: '#f5f8fa' }}
    >
      <Container>
        <h2
          className='font-weight-bold'
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        ></h2>
        <Row className='mt-5'>
          {steps.map((step, index) => (
            <Col key={index} className='mb-5' lg={4}>
              <StepCard
                stepNum={index + 1}
                text={step.title}
                desc={step.desc}
                imgSrc={step.img}
              />
            </Col>
          ))}
        </Row>
        {ctaText && (
          <p
            dangerouslySetInnerHTML={{
              __html: ctaText,
            }}
            className='font-weight-bold'
          ></p>
        )}

        {ctaBtn && (
          <Link href={ctaBtnLink}>
            <a className='cta-btn cta-btn-primary'>{ctaBtn}</a>
          </Link>
        )}
      </Container>
    </section>
  );
};

StepsList.defaultProps = {
  ctaBtnLink: '#',
};

export default StepsList;
