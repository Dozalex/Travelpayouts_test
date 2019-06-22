import './PageTitle.pcss';

const PageTitle = ({ title }) => (
  <h1 className='PageTitle'>{title}</h1>
);

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
