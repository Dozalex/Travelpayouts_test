import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';

import logo from 'images/logo.svg';
import icon from 'images/icon.svg';

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
    } = this.props;
    const selected = location.pathname === to;

    return (
      <li
        key={key}
        title={title}
      >
        <Link
          to={to}
          className={`Navigation__menu-item ${selected ? 'Navigation__menu-item--selected' : ''}`}>
          <SVG src={icon} />
        </Link>
      </li>
    );
  };

  render() {
    const menuItems = this.getMenuItems();

    return (
      <nav className='Navigation'>
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
    );
  }
}

Navigation.propTypes = {
  location: PropTypes.object,
};

export default translate()(Navigation);
