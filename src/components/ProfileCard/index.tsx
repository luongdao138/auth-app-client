import { Link, useHistory } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { Content, Footer, Header, Wrapper } from './ProfileCard.styles';
import no_user from '../../assets/no_user.png';

const ProfileCard = () => {
  const { user } = useAppSelector((state) => state.auth);
  const history = useHistory();

  return (
    <>
      <Wrapper>
        <Header>
          <div className='title'>
            <p className='big'>Profile</p>
            <p className='small'>Some info maybe visible to other people</p>
          </div>
          <button onClick={() => history.push('/profile/edit')}>Edit</button>
        </Header>
        <Content>
          <li>
            <span className='title'>Photo</span>
            <span className='value'>
              <img src={user.photo || no_user} alt='' />
            </span>
          </li>
          <li>
            <span className='title'>Name</span>
            <span className='value'>{user.display_name}</span>
          </li>
          <li>
            <span className='title'>Bio</span>
            <span className='value'>{user.bio}</span>
          </li>
          <li>
            <span className='title'>Phone</span>
            <span className='value'>{user.phone}</span>
          </li>
          <li>
            <span className='title'>Email</span>
            <span className='value'>{user.email}</span>
          </li>
          <li>
            <span className='title'>Password</span>
            <span className='value'>**********</span>
          </li>
        </Content>
      </Wrapper>
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
    </>
  );
};

export default ProfileCard;
