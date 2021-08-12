import { Divider, List, Wrapper } from './Menu.styles';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { MdExitToApp, MdGroup } from 'react-icons/md';
import useEventListener from '../../hooks/useEventListener';
import { useRef, MouseEvent } from 'react';
import { useAppDispatch } from '../../app/hooks';
import axiosClient from '../../api/axiosClient';
import { logout } from '../../features/auth/authSlice';

interface Props {
  onClose: () => void;
  buttonRef: React.MutableRefObject<HTMLButtonElement | null>;
}

const Menu = ({ onClose, buttonRef }: Props) => {
  useEventListener('mousedown', window, (e) => {
    if (
      !ref.current?.contains(e.target) &&
      !buttonRef.current?.contains(e.target)
    ) {
      onClose();
    }
  });
  const dispatch = useAppDispatch();
  const history = useHistory();
  const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logout());
    history.push('/login');
  };

  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <Wrapper ref={ref}>
      <List>
        <li>
          <Link to='/profile'>
            <FaUserCircle />
            <span>My profile</span>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <MdGroup />
            <span>Group Chat</span>
          </Link>
        </li>
        <Divider />
        <li>
          <Link to='/' style={{ color: '#EB5757' }} onClick={handleLogout}>
            <MdExitToApp />
            <span>Logout</span>
          </Link>
        </li>
      </List>
    </Wrapper>
  );
};

export default Menu;
