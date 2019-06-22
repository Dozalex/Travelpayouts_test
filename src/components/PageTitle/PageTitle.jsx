import './PageTitle.pcss';

const PageTitle = ({ title }) => (
  <h1>{title}</h1>
);

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
