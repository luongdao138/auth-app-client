import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosClient from '../api/axiosClient';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { login_fulfilled, logout } from '../features/auth/authSlice';
import { User } from '../features/auth/interface';

const useFetchUser = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axiosClient().get('/users');
        let user: User = {} as User;
        user._id = res.data._id;
        user.email = res.data.email;
        user.social_id = res.data.social_id;
        user.bio = res.data.bio;
        user.photo = res.data.photo;
        user.phone = res.data.phone;
        user.display_name = res.data.display_name;
        dispatch(login_fulfilled(user));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            dispatch(logout());
            history.push('/login');
          }
        } else {
          setError('Oops! There is something wrong!');
        }
      }
    };

    if (!user._id) getUser();
    else setLoading(false);
  }, [user._id]);

  return { loading, error };
};

export default useFetchUser;
