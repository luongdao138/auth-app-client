import { Redirect, Route } from 'react-router-dom';

const LoggedInRoute = ({ children, loading, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated) return children;
        else return <Redirect to='/' />;
      }}
    />
  );
};

export default LoggedInRoute;
