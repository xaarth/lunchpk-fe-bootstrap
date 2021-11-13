import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

import StepCard from './StepCard';

const StepsList = ({ title, ctaText, ctaBtn, ctaBtnLink, steps }) => (
  <section
    className='text-center '
    style={{ padding: '4.375rem 0 3.125rem', background: '#f5f8fa' }}
  >
    <Container>
      <h2 className='font-weight-bold'>{title}</h2>
      <Row className='mt-5'>
        {steps.map((step, index) => (
          <Col key={step.title} className='mb-5' lg={4}>
            <StepCard
              stepNum={index + 1}
              text={step.title}
              desc={step.desc}
              imgSrc={step.img}
            />
          </Col>
        ))}
      </Row>
      {ctaText && <p className='font-weight-bold'>{ctaText}</p>}

      {ctaBtn && (
        <Link href={ctaBtnLink}>
          <a className='cta-btn cta-btn-primary'>{ctaBtn}</a>
        </Link>
      )}
    </Container>
  </section>
);

StepsList.defaultProps = {
  ctaBtnLink: '#',
};

export default StepsList;
