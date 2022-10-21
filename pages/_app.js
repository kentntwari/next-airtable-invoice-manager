import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-white-lighter dark:bg-blue-dark">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
