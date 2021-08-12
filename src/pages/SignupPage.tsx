import Logo from '../assets/devchallenges-light.svg';
import { Typography, Input, Icon } from '../GlobalStyle';
import { MdEmail, MdLock } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import {
  Button,
  Content,
  Error,
  FormGroup,
  Social,
  Wrapper,
} from './styles/AuthStyle';
import useSignin from '../hooks/useSignin';
import { ChangeEvent, FormEvent, useState } from 'react';
import { AuthFormState } from '../features/auth/interface';
import axiosClient from '../api/axiosClient';
import axios from 'axios';
import Loading from '../components/Loading';
import SocialAuth from '../components/socialAuth';

const SignupPage = () => {
  const { loading } = useSignin();
  const history = useHistory();
  const [error, setError] = useState<null | string>(null);
  const [values, setValues] = useState<AuthFormState>({
    password: '',
    email: '',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axiosClient().post('/auth/signup', values);
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

  if (loading) return <Loading />;

  return (
    <Wrapper>
      <Content>
        <img src={Logo} alt='' />
        <Typography
          color='#e0e0e0'
          font_size={18}
          font_weight={500}
          style={{ margin: '10px 0' }}
        >
          Join thousands of learners from around the world
        </Typography>
        <Typography
          color='#e0e0e0'
          font_size={14}
          style={{ marginBottom: '30px' }}
        >
          Master web development by making real-life projects. There are
          multiple paths for you to choose
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
          <Button>Start coding now</Button>
        </form>
        <Social>
          <Typography color='#828282' font_size={14}>
            or continue with these social profile
          </Typography>
          <SocialAuth />
        </Social>
        <Typography
          color='#828282'
          font_size={14}
          style={{ marginTop: '15px', textAlign: 'center' }}
        >
          Already a member?{' '}
          <Link to='/login' style={{ color: '#2F80ED' }}>
            Login
          </Link>
        </Typography>
      </Content>
    </Wrapper>
  );
};

export default SignupPage;
