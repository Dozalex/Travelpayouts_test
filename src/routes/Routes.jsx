import {
  Switch,
  Router,
} from 'react-router-dom';

import ServicesPage from 'pages/Services';

import route   from './constants';
import history from './history';

import Route from './DefaultRoute';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path={route.root} component={ServicesPage} />
    </Switch>
  </Router>
);

export default Routes;
