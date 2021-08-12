import { FaGoogle, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router';
import axiosClient from '../../api/axiosClient';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useEffect } from 'react';
import axios from 'axios';

const SocialAuth = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const githubAuth = async () => {
      const code = new URLSearchParams(location.search).get('code');
      if (code) {
        try {
          const res = await axios.post(
            'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
            {
              client_id: 'Iv1.a066822365cc5999',
              client_secret: '19a7f4f068b2027d7794abfe3e5fa5ca35592c54',
              code,
            },
            {
              headers: {
                Accept: 'application/json',
              },
            }
          );

          const response = await axiosClient().post('/auth/github', {
            access_token: res.data.access_token,
          });
          localStorage.setItem('auth_token', response.data.token);
          history.push('/profile');
        } catch (error) {}
      }
    };

    githubAuth();
  }, []);

  const handleOAuthLogin = async (res: any) => {
    try {
      const response = await axiosClient().post('/auth/google', {
        idToken: res.tokenId,
      });
      localStorage.setItem('auth_token', response.data.token);
      history.push('/profile');
    } catch (error) {
      console.log(error);
    }
    // console.log();
  };

  const handleFacebookLogin = async (res: any) => {
    console.log(res);
    try {
      const response = await axiosClient().post('/auth/facebook', {
        userId: res.userID,
        accessToken: res.accessToken,
      });
      localStorage.setItem('auth_token', response.data.token);
      history.push('/profile');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='icon_wrapper'>
      <GoogleLogin
        clientId='63402635672-qg2gll1l0hojkojtknn2e2r4t4dlhfgj.apps.googleusercontent.com'
        onSuccess={handleOAuthLogin}
        onFailure={handleOAuthLogin}
        cookiePolicy='single_host_origin'
        render={({ onClick }) => {
          return (
            <span onClick={onClick}>
              <FaGoogle />
            </span>
          );
        }}
      />
      <FacebookLogin
        appId='231533002213191'
        autoLoad={false}
        callback={handleFacebookLogin}
        render={(props: any) => {
          return (
            <span onClick={props.onClick}>
              <FaFacebook />
            </span>
          );
        }}
      />
      <span>
        <FaTwitter />
      </span>
      <a href='https://github.com/login/oauth/authorize?client_id=Iv1.a066822365cc5999&redirect_uri=https://loving-banach-b7319b.netlify.app/login'>
        <span>
          <FaGithub />
        </span>
      </a>
    </div>
  );
};

export default SocialAuth;
