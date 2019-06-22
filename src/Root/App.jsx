import { BrowserRouter }   from 'react-router-dom';
import { hot }             from 'react-hot-loader';
import { Provider }        from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import 'normalize.css/normalize.css';

import configureStore from 'redux/configureStore';
import i18n           from 'settings/translate';
import axiosSettings  from 'settings/axios';

import Routes from 'routes/Routes';

const store = configureStore();

axiosSettings(store);

const App = props => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>

        <React.Fragment>
          <Routes />
          {props.children}
        </React.Fragment>

      </BrowserRouter>
    </I18nextProvider>
  </Provider>
);

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: null,
};

export default hot(module)(App);
