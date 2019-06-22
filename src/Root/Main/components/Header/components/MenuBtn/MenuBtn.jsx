import './MenuBtn.pcss';

const MenuBtn = ({ onShowNavigation }) => (
  <button
    className='MenuBtn'
    onClick={onShowNavigation}
  >
    <span className='MenuBtn__element' />
  </button>
);

export default MenuBtn;
