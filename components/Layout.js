import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./Header'));
const Footer = dynamic(() => import('./Footer'));

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
