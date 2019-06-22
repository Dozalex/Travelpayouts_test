import PageContainer from 'components/PageContainer';
import PageTitle     from 'components/PageTitle';

class ServicesPage extends PureComponent {
  render() {
    const {
      t,
    } = this.props;

    return (
      <PageContainer>
        <PageTitle title={t('title.services')} />
      </PageContainer>
    );
  }
}

ServicesPage.propTypes = {
  t: PropTypes.func,
};

export default translate()(ServicesPage);
