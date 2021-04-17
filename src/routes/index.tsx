import react from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/Signin'
import Welcome from '../pages/Welcome';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Welcome} />
    <Route path="/signIn" exact component={SignIn} />
  </Switch>
)

export default Routes;