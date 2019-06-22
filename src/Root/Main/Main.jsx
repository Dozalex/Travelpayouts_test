import * as actions   from 'Root/modules/actions';
import * as selectors from 'Root/modules/selectors';

import './Main.css';

import Navigation from './components/Navigation';
import Header     from './components/Header';
import Footer     from './components/Footer';

class Main extends PureComponent {
  componentDidMount() {
    this.props.getInitialData();
  }

  render() {
    const {
      children,
      header,
    } = this.props;

    return (
      <div className='Main'>
        <Navigation />

        <div className='Main__page'>
          <Header header={header} />

          <div className='Main__page-body'>
            <div className='Main_page-content'>
              {children}
            </div>

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.node,

  header: PropTypes.object,

  getInitialData: PropTypes.func,
};

Main = connect(state => ({
  header: selectors.getHeader(state),
}), {
  getInitialData: actions.getInitialData,
})(Main);

export default Main;
