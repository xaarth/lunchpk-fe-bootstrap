import Link from 'next/link';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleCloseNavMenu = () => {
    setTimeout(() => {
      setExpanded(false);
    }, 150);
  };

  return (
    <Navbar
      id='main-nav'
      bg='white'
      expanded={expanded}
      sticky='top'
      expand='lg'
    >
      <Container>
        <Link href='/'>
          <Navbar.Brand
            onClick={handleCloseNavMenu}
            style={{ cursor: 'pointer' }}
          >
            <Image
              src='/assets/img/logo.png'
              width={125}
              height={48}
              alt='lunchpk logo'
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle onClick={() => setExpanded((prevState) => !prevState)} />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <NavDropdown title='Monthly Menu' id='basic-nav-dropdown'>
              <Link href='/monthly-menu/economy-menu'>
                <a onClick={handleCloseNavMenu} className='dropdown-item'>
                  Economy Menu
                </a>
              </Link>
              <Link href='/monthly-menu/mazedar-menu'>
                <a onClick={handleCloseNavMenu} className='dropdown-item'>
                  Mazedar Menu
                </a>
              </Link>
              <Link href='/monthly-menu/executive-menu'>
                <a onClick={handleCloseNavMenu} className='dropdown-item'>
                  Executive Menu
                </a>
              </Link>
              <Link href='/monthly-menu/iftar-and-dinner'>
                <a onClick={handleCloseNavMenu} className='dropdown-item'>
                  Iftar and Dinner
                </a>
              </Link>
              <Link href='/monthly-menu/seher-menu'>
                <a onClick={handleCloseNavMenu} className='dropdown-item'>
                  Seher Menu
                </a>
              </Link>
              <Link href='/monthly-menu/weight-loss-diet-plan'>
                <a onClick={handleCloseNavMenu} className='dropdown-item'>
                  Weight Loss Diet Menu
                </a>
              </Link>
              <Link href='/monthly-menu/2-time-meal'>
                <a onClick={handleCloseNavMenu} className='dropdown-item'>
                  Lunch + Dinner (2 Time Meal)
                </a>
              </Link>
              <Link href='/monthly-menu/corporate-menu'>
                <a onClick={handleCloseNavMenu} className='dropdown-item'>
                  Corporate Menu (10 Persons)
                </a>
              </Link>
              <Link href='/monthly-menu/high-blood-pressure-diet'>
                <a onClick={handleCloseNavMenu} className='dropdown-item'>
                  High Blood Pressure Menu
                </a>
              </Link>
            </NavDropdown>

            <Link href='/food-deals/'>
              <a onClick={handleCloseNavMenu} className='nav-link'>
                Daily Menu
              </a>
            </Link>

            <Link href='/frozen-food/'>
              <a onClick={handleCloseNavMenu} className='nav-link'>
                Frozen Food
              </a>
            </Link>

            <Link href='/make-money/become-a-foodlancer/'>
              <a onClick={handleCloseNavMenu} className='nav-link'>
                Become a Foodlancer
              </a>
            </Link>

            <Link href='/contact-us/'>
              <a onClick={handleCloseNavMenu} className='nav-link'>
                Contact
              </a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
