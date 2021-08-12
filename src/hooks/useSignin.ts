import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosClient from '../api/axiosClient';

const useSignin = () => {
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        await axiosClient().get('/users');
        setLoading(false);
        history.push('/profile');
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getUser();
  }, []);

  return { loading };
};

export default useSignin;
