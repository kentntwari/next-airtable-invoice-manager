import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import Options from '../modules/invoice/Options';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <div className="min-h-screen bg-white-lighter dark:bg-blue-dark">
        <Layout>
          <Component {...pageProps} />
        </Layout>

        {router.route === '/invoice/[invoice]' && <Options />}
      </div>
    </>
  );
}

export default MyApp;
