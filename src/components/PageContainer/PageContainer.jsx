import './PageContainer.pcss';

class PageContainer extends PureComponent {
  render() {
    const {
      children,
    } = this.props;

    return (
      <section className='PageContainer'>
        {children}
      </section>
    );
  }
}

PageContainer.propTypes = {
  children: PropTypes.node,
};

export default PageContainer;
