import { Link } from 'react-router-dom';
import { Wrapper, Content, Button } from './Navbar.styles';
import Logo from '../../assets/devchallenges-light.svg';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import Menu from '../Menu';
import { useRef, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import no_user from '../../assets/no_user.png';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { user } = useAppSelector((state) => state.auth);
  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        <Button>
          <button
            className='button'
            onClick={() => {
              setOpenMenu((x) => !x);
            }}
            ref={buttonRef}
          >
            <img src={user.photo || no_user} alt='' />
            {user.display_name && <span>{user.display_name}</span>}
            {!openMenu ? <FaCaretDown /> : <FaCaretUp />}
          </button>
          {openMenu && (
            <Menu
              buttonRef={buttonRef}
              onClose={() => {
                setOpenMenu(false);
              }}
            />
          )}
        </Button>
      </Content>
    </Wrapper>
  );
};

export default Navbar;
