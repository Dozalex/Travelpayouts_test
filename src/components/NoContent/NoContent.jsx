import Card from 'components/Card';

import './NoContent.pcss';

const NoContent = ({ msg }) => (
  <Card className='NoContent'>
    <p className='NoContent__msg'>
      {msg}
    </p>
  </Card>
);

NoContent.propTypes = {
  msg: PropTypes.string,
};

export default NoContent;
