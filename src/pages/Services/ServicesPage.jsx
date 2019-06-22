import PageContainer from 'components/PageContainer';
import PageTitle     from 'components/PageTitle';
import TextField     from 'components/TextField';

class ServicesPage extends PureComponent {
  state = {
    filter: '',
  };

  onChangeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const {
      t,
    } = this.props;

    return (
      <PageContainer>
        <PageTitle title={t('title.services')} />

        <TextField
          value={this.state.filter}
          onChange={this.onChangeFilter}
          label={t('label.filter')}
          placeholder={t('placeholder.serviceFilter')}
        />
      </PageContainer>
    );
  }
}

ServicesPage.propTypes = {
  t: PropTypes.func,
};

export default translate()(ServicesPage);
