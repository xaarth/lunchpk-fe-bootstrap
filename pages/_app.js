import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (
    router.route ===
    '/ahrefs_6dc3b7a8ea2d6e76a734011b8c22479a7914b3f2ad0a64b89db4a742906f102d'
  ) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
