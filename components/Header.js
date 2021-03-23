import Link from 'next/link';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar id='main-nav' bg='white' sticky='top' expand='lg'>
      <Container>
        <Link href='/'>
          <Navbar.Brand style={{ cursor: 'pointer' }}>
            <img src='/assets/img/logo.png' height='48' alt='lunchpk logo' />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <NavDropdown title='Monthly Menu' id='basic-nav-dropdown'>
              <Link href='/monthly-menu/economy-menu'>
                <a className='dropdown-item'>Economy Menu</a>
              </Link>
              <Link href='/monthly-menu/mazedar-menu'>
                <a className='dropdown-item'>Mazedar Menu</a>
              </Link>
              <Link href='/monthly-menu/executive-menu'>
                <a className='dropdown-item'>Executive Menu</a>
              </Link>
              <Link href='/monthly-menu/iftar-and-dinner'>
                <a className='dropdown-item'>Iftar and Dinner</a>
              </Link>
              <Link href='/monthly-menu/seher-menu'>
                <a className='dropdown-item'>Seher Menu</a>
              </Link>
              <Link href='/monthly-menu/weight-loss-diet-plan'>
                <a className='dropdown-item'>Weight Loss Diet Menu</a>
              </Link>
              <Link href='/monthly-menu/2-time-meal'>
                <a className='dropdown-item'>Lunch + Dinner (2 Time Meal)</a>
              </Link>
              <Link href='/monthly-menu/corporate-menu'>
                <a className='dropdown-item'>Corporate Menu (10 Persons)</a>
              </Link>
              <Link href='/monthly-menu/high-blood-pressure-diet'>
                <a className='dropdown-item'>High Blood Pressure Menu</a>
              </Link>
            </NavDropdown>

            <Link href='/food-deals/'>
              <a className='nav-link'>Daily Menu</a>
            </Link>

            <Link href='/frozen-food/'>
              <a className='nav-link'>Frozen Food</a>
            </Link>

            <Link href='/make-money/become-a-foodlancer/'>
              <a className='nav-link'>Become a Foodlancer</a>
            </Link>

            <Link href='/contact-us/'>
              <a className='nav-link'>Contact</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
