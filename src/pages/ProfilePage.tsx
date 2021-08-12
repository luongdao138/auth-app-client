import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import { Typography } from '../GlobalStyle';
import useFetchUser from '../hooks/useFetchUser';
import { Wrapper } from './styles/ProfileStyle';

const ProfilePage = () => {
  const { loading } = useFetchUser();

  if (loading) return <Loading />;

  return (
    <Wrapper>
      <Navbar />
      <Typography
        font_size={32}
        color='#e0e0e0'
        style={{ margin: '30px 0 10px 0', textAlign: 'center' }}
      >
        Personal info
      </Typography>
      <Typography
        font_size={15}
        font_weight={300}
        color='#e0e0e0'
        style={{ margin: '0', textAlign: 'center' }}
      >
        Basic info, like your name and photo
      </Typography>
      <ProfileCard />
    </Wrapper>
  );
};

export default ProfilePage;
