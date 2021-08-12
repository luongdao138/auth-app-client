import { Redirect, Route } from 'react-router-dom';
import styled from 'styled-components';

const PrivateRoute = ({ children, loading, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loading) return <p>Loading...</p>;

        if (isAuthenticated) return children;
        else return <Redirect to='/login' />;
      }}
    />
  );
};

const SpinnerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default PrivateRoute;
