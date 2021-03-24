import { Container, Row, Col, Image } from 'react-bootstrap';
import Link from 'next/link';
import WhatsappBtn from '../components/WhatsappBtn';

const Showcase = ({
  title,
  desc,
  btnLink,
  imgSrc,
  imgAlt,
  bg,
  textColor,
  spacing,
  btnText,
  btnVariant,
  overlay,
}) => {
  return (
    <section
      id='main-showcase'
      style={{
        background: bg,
        padding: spacing,
        color: textColor,
        position: 'relative',
      }}
    >
      {overlay && (
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: overlay,
          }}
          className='overlay'
        ></div>
      )}

      <Container>
        <Row>
          <Col className='text-center text-md-left align-self-center' lg={6}>
            <div className='showcase-content'>
              <h1
                className='title mb-4'
                style={{
                  fontWeight: '800',
                  fontSize: '260%',
                }}
              >
                {title}
              </h1>
              <p
                className='subtitle mb-4'
                style={{
                  fontSize: '18px',
                  lineHeight: '30px',
                }}
                dangerouslySetInnerHTML={{ __html: desc }}
              ></p>
              <Link href={btnLink}>
                <a className={`${btnVariant} see-menu-btn`}>{btnText}</a>
              </Link>
              <WhatsappBtn />
            </div>
          </Col>
          <Col className='text-center' lg={6}>
            <div className='d-none d-lg-block showcase-img'>
              <Image
                style={{ width: '80%' }}
                src={imgSrc}
                alt={imgAlt || title}
                fluid
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

Showcase.defaultProps = {
  bg: '#f6f4f0',
  textColor: '#212529',
  spacing: '4rem 0 4rem',
  btnLink: '#',
  btnText: 'Btn Text',
  btnVariant: 'cta-btn cta-btn-primary',
};

export default Showcase;
