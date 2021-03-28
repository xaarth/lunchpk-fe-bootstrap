import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import WhatsappBtnSmall from './WhatsappBtnSmall';

const Footer = () => {
  return (
    <>
      <WhatsappBtnSmall />
      <footer id='main-footer'>
        <Container>
          <Row>
            <Col className='mb-3' md={3}>
              <h5 className='footer-col-title'>Useful Links</h5>
              <Link href='/'>
                <a className='footer-links'>Home</a>
              </Link>
              <Link href='/food-deals'>
                <a className='footer-links'>Daily Menu</a>
              </Link>
              <Link href='/frozen-food'>
                <a className='footer-links'>Frozen Food</a>
              </Link>
              <Link
                className='footer-links'
                href='/make-money/become-a-foodlancer'
              >
                <a className='footer-links'>Become a Foodlancer</a>
              </Link>
              <Link href='/contact-us'>
                <a className='footer-links'>Contact</a>
              </Link>
            </Col>
            <Col className='mb-3' md={3}>
              <h5 className='footer-col-title'>Monthly Menus</h5>
              <Link href='/monthly-menu/economy-menu'>
                <a className='footer-links'>Economy Menu</a>
              </Link>
              <Link href='/monthly-menu/mazedar-menu'>
                <a className='footer-links'>Mazedar Menu</a>
              </Link>
              <Link href='/monthly-menu/executive-menu'>
                <a className='footer-links'>Executive Menu</a>
              </Link>
              <Link href='/monthly-menu/corporate-menu'>
                <a className='footer-links'>Corporate Menu</a>
              </Link>
              <Link href='/monthly-menu/2-time-meal'>
                <a className='footer-links'>2 Time Meal</a>
              </Link>
            </Col>
            <Col className='mb-3' md={3}>
              <h5 className='footer-col-title'>Daily Deals</h5>
              <Link href='/food-deals/chickenbiryani'>
                <a className='footer-links'>Chicken Biryani</a>
              </Link>
              <Link href='/food-deals/mutton-karahi'>
                <a className='footer-links'>Mutton Karahi</a>
              </Link>
              <Link className='footer-links' href='/food-deals/dalchawal'>
                <a className='footer-links'>Daal Chawal</a>
              </Link>
              <Link href='/food-deals/chicken-korma'>
                <a className='footer-links'>Chicken Korma</a>
              </Link>
              <Link href='/food-deals/chicken-jalfrezi'>
                <a className='footer-links'>Chicken Jalfrezi w Rice</a>
              </Link>
            </Col>
            <Col className='mb-3' md={3}>
              <h5 className='footer-col-title'>Frozen Foods</h5>
              <Link href='/frozen-food/seekh-kebab'>
                <a className='footer-links'>Seekh Kebab</a>
              </Link>
              <Link href='/frozen-food/chicken-nuggets'>
                <a className='footer-links'>Chicken Nuggets</a>
              </Link>
              <Link href='/frozen-food/chicken-chinese-samosa'>
                <a className='footer-links'>Chicken Chinese Samosa</a>
              </Link>
              <Link href='/frozen-food/chicken-kofta'>
                <a className='footer-links'>Chicken Kofta</a>
              </Link>
              <Link href='/frozen-food/chicken-chinese-rolls'>
                <a className='footer-links'>Chicken Chinese Rolls</a>
              </Link>
            </Col>
          </Row>
          <div
            className='mb-3'
            style={{ background: '#7c98b6', height: '1px', width: '98%' }}
          ></div>
          <div className='d-flex align-items-centet'>
            <Link href='/terms-of-service'>
              <a className='footer-links mr-4'>Terms of service</a>
            </Link>
            <Link href='/privacy-policy'>
              <a className='footer-links'>Privacy Policy</a>
            </Link>

            <div className='ml-auto'>
              <p
                className='mr-4'
                style={{ fontSize: '12px', color: '#cbd6e2' }}
              >
                Copyright © 2021 Lunch.pk All rights reserved.
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
