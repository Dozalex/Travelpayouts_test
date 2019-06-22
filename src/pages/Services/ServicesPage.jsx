import PageContainer from 'components/PageContainer';
import PageTitle     from 'components/PageTitle';
import TextField     from 'components/TextField';
import Button        from 'components/Button';

import './ServicesPage.pcss';

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
    } = this.props;
    const {
      filter,
    } = this.state;

    return (
      <PageContainer>
        <PageTitle title={t('title.services')} />

        <div className='ServicesPage__filter-section'>
          <TextField
            className='ServicesPage__filter-input'
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
      </PageContainer>
    );
  }
}

ServicesPage.propTypes = {
  t: PropTypes.func,
};

export default translate()(ServicesPage);
