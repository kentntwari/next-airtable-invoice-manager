import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="px-6 flex flex-col gap-8">{children}</main>
    </>
  );
};

export default Layout;
