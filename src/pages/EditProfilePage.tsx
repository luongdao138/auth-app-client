import Navbar from '../components/Navbar';
import useFetchUser from '../hooks/useFetchUser';
import { BackBtn, Container, Wrapper } from './styles/ProfileStyle';
import { MdChevronLeft } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import EditProfileForm from '../components/EditProfileForm';
import Loading from '../components/Loading';
import { Footer } from '../components/ProfileCard/ProfileCard.styles';

const EditProfilePage = () => {
  const { loading } = useFetchUser();
  const history = useHistory();
  if (loading) return <Loading />;

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <BackBtn onClick={() => history.push('/profile')}>
          <MdChevronLeft />
          Back
        </BackBtn>
        <EditProfileForm />
      </Container>
      <Footer>
        <span className='username'>
          Created by{' '}
          <Link
            style={{ color: '#2F80ED', textDecoration: 'underline' }}
            to='/'
          >
            Luongdao
          </Link>
        </span>
        <span className='dev'>devChallenges.io</span>
      </Footer>
    </Wrapper>
  );
};

export default EditProfilePage;
