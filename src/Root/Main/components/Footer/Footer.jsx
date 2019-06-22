import './Footer.pcss';

class Footer extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <footer className='Footer'>
        <p className='Footer__copywriting'>
          {t('footer.copywriting')}
        </p>
      </footer>
    );
  }
}

Footer.propTypes = {
  t: PropTypes.func,
};

export default translate()(Footer);
