import { Link } from 'react-router-dom';
import SVG      from 'react-inlinesvg';

import logo from 'images/logo.svg';
import icon from 'images/menu-icon.svg';

import route from 'routes/constants';

import './Navigation.pcss';

class Navigation extends PureComponent {
  getMenuItems = () => {
    const {
      t,
    } = this.props;
    const items = [];

    items.push(
      {
        key  : route.dashboard,
        to   : route.dashboard,
        title: t('link.dashboard'),
      },
      {
        key  : route.reports,
        to   : route.reports,
        title: t('link.reports'),
      },
      {
        key  : route.statistics,
        to   : route.statistics,
        title: t('link.statistics'),
      },
      {
        key  : route.offers,
        to   : route.offers,
        title: t('link.offers'),
      },
      {
        key  : route.tools,
        to   : route.tools,
        title: t('link.tools'),
      },
      {
        key  : route.dev,
        to   : route.dev,
        title: t('link.dev'),
      },
      {
        key  : route.services,
        to   : route.services,
        title: t('link.services'),
      },
      {
        key  : route.finance,
        to   : route.finance,
        title: t('link.finance'),
      },
    );

    return items;
  };

  renderMenuItem = ({ key, title, to }) => {
    const {
      location,
      onHide,
    } = this.props;
    const selected = location.pathname === to;

    return (
      <li
        key={key}
        title={title}
      >
        <Link
          onClick={onHide}
          to={to}
          className={`Navigation__menu-item ${selected ? 'Navigation__menu-item--selected' : ''}`}>
          <SVG src={icon} />
        </Link>
      </li>
    );
  };

  render() {
    const {
      onHide,
      showNavigation,
    } = this.props;
    const menuItems = this.getMenuItems();

    return (
      <React.Fragment>
        <div
          onClick={onHide}
          className={`Navigation__backdrop ${showNavigation ? 'Navigation__backdrop--show' : ''}`}
        />

        <nav className={`Navigation ${showNavigation ? 'Navigation--show' : ''}`}>
          <img
            src={logo}
            alt='logo'
            className='Navigation__logo'
          />

          <ul className='Navigation__menu'>
            {
              menuItems.map(item => this.renderMenuItem(item))
            }
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

Navigation.propTypes = {
  onHide        : PropTypes.func.isRequired,
  showNavigation: PropTypes.bool.isRequired,
  location      : PropTypes.object.isRequired,
};

export default translate()(Navigation);
