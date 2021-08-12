import Logo from '../assets/devchallenges-light.svg';
import { Typography, Input, Icon } from '../GlobalStyle';
import { MdEmail, MdLock } from 'react-icons/md';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {
  Button,
  Content,
  Error,
  FormGroup,
  Social,
  Wrapper,
} from './styles/AuthStyle';
import { ChangeEvent, FormEvent, useState } from 'react';
import { AuthFormState } from '../features/auth/interface';
import axiosClient, { backendUrl } from '../api/axiosClient';
import axios from 'axios';
import useSignin from '../hooks/useSignin';
import Loading from '../components/Loading';
import SocialAuth from '../components/SocialAuth';

const LoginPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { loading } = useSignin();
  const [error, setError] = useState<string | null>(null);
  const [values, setValues] = useState<AuthFormState>({
    password: '',
    email: '',
  });

  if (loading) return <Loading />;

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axiosClient().post('/auth/login', values);
      localStorage.setItem('auth_token', res.data.token);
      history.push('/profile');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message);
      } else {
        setError('Oops! Something went wrong!');
      }
    }
  };

  return (
    <Wrapper>
      <Content>
        <img src={Logo} alt='' />
        <Typography
          color='#e0e0e0'
          font_size={18}
          font_weight={500}
          style={{ margin: '20px 0 30px 0' }}
        >
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Icon font_size={20} color='#828282'>
              <MdEmail />
            </Icon>
            <Input
              border_color='#bdbdbd'
              placeholder_color='#828282'
              color='#e0e0e0'
              font_weight={400}
              placeholder='Email'
              icon
              name='email'
              value={values.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Icon font_size={20} color='#828282'>
              <MdLock />
            </Icon>
            <Input
              border_color='#bdbdbd'
              placeholder_color='#828282'
              color='#e0e0e0'
              font_weight={400}
              placeholder='Password'
              type='password'
              icon
              name='password'
              value={values.password}
              onChange={handleChange}
            />
          </FormGroup>
          {error && <Error>{error}</Error>}
          <Button>Login</Button>
        </form>
        <Social>
          <Typography color='#828282' font_size={14}>
            or continue with these social profile
          </Typography>
          <div className='icon_wrapper'>
            <SocialAuth />
          </div>
        </Social>
        <Typography
          color='#828282'
          font_size={14}
          style={{ marginTop: '15px', textAlign: 'center' }}
        >
          Don't have an account yet?{' '}
          <Link to='/signup' style={{ color: '#2F80ED' }}>
            Register
          </Link>
        </Typography>
      </Content>
    </Wrapper>
  );
};

export default LoginPage;
