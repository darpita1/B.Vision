import homePage from './pages/homepage.js';
import LoginPage from './pages/loginPage.js';
import ProfilePage from './pages/profilePage.js';
import CreateAccountPage from './pages/createAccountPage.js';
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute.js';

function App() {

   return (
    
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute path="/profile" component={ProfilePage} />
            <Route path="/signup" component={CreateAccountPage} />
            <Route path="/" component={LoginPage} />
          </Switch>
        </AuthProvider>
      </Router>

  );
}

export default App;
