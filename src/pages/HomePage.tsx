import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import useFetchUser from '../hooks/useFetchUser';

const HomePage = () => {
  const { loading } = useFetchUser();

  if (loading) return <Loading />;
  return (
    <>
      <Navbar />
    </>
  );
};

export default HomePage;
