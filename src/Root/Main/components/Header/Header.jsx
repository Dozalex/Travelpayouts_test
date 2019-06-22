import i18n from 'i18next';

import './Header.pcss';

import MenuBtn from './components/MenuBtn'

class Header extends PureComponent {
  renderMoneyItem = (label, value) => {
    const { header } = this.props;
    const money = value.toLocaleString(
      i18n.language,
      {
        style   : 'currency',
        currency: header.currency.toUpperCase(),
      },
    );

    return (
      <div className='Header__money'>
        <p className='Header__money-label'>
          {label}
        </p>
        <p className='Header__money-value'>
          {money}
        </p>
      </div>
    );
  };

  render() {
    const {
      t,
      header,
      onShowNavigation,
    } = this.props;

    if (!header) return null;

    return (
      <header className='Header'>
        <MenuBtn onShowNavigation={onShowNavigation} />
        {this.renderMoneyItem(t('label.balance'), header.balance)}
        {this.renderMoneyItem(t('label.nextPayout'), header.next_payout)}
      </header>
    );
  }
}

Header.propTypes = {
  header          : PropTypes.shape({
    balance    : PropTypes.number,
    next_payout: PropTypes.number,
    currency   : PropTypes.string,
  }),
  onShowNavigation: PropTypes.func,

  t: PropTypes.func,
};

export default translate()(Header);
