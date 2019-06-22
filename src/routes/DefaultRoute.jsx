import { Route } from 'react-router-dom';

import Main from 'Root/Main';

const DefaultRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={props => React.createElement(Main, props, React.createElement(component, props))}
  />
);

DefaultRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default DefaultRoute;
