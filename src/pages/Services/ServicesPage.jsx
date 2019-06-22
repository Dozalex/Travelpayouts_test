import PageContainer from 'components/PageContainer';
import PageTitle     from 'components/PageTitle';
import TextField     from 'components/TextField';
import Button        from 'components/Button';

import * as selectors from 'Root/modules/selectors';

import './ServicesPage.pcss';

import Service from './components/Service';

class ServicesPage extends PureComponent {
  state = {
    filter: '',
  };

  handleResetFilter = () => {
    this.setState({ filter: '' });
  };

  onChangeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const {
      t,
      bonuses,
    } = this.props;
    const {
      filter,
    } = this.state;

    return (
      <PageContainer>
        <PageTitle title={t('title.services')} />

        <div className='ServicesPage__filter-section'>
          <TextField
            value={filter}
            onChange={this.onChangeFilter}
            label={t('label.filter')}
            placeholder={t('placeholder.serviceFilter')}
          />

          <Button
            disabled={!filter}
            onClick={this.handleResetFilter}
          >
            {t('btn.reset')}
          </Button>
        </div>

        {
          bonuses.map(bonus => (
            <Service
              key={`${bonus.title} ${bonus.promocode}`}
              service={bonus}
            />
          ))
        }
      </PageContainer>
    );
  }
}

ServicesPage.propTypes = {
  t: PropTypes.func,
};

ServicesPage = connect(state => ({
  bonuses: selectors.getBonuses(state),
}))(ServicesPage);

export default translate()(ServicesPage);
