import GlobalStyle from './GlobalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/profile' exact component={ProfilePage} />
        <Route path='/profile/edit' exact component={EditProfilePage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/signup' exact component={SignupPage} />
      </Switch>
      <GlobalStyle />
    </Router>
  );
};

export default App;
