import * as actions   from 'Root/modules/actions';
import * as selectors from 'Root/modules/selectors';

import './Main.pcss';

import Navigation from './components/Navigation';
import Header     from './components/Header';
import Footer     from './components/Footer';

class Main extends PureComponent {
  state = {
    showNavigation: false,
  };

  componentDidMount() {
    this.props.getInitialData();
  }

  onShowNavigation = () => {
    this.setState({ showNavigation: true });
  };

  onHideNavigation = () => {
    this.setState({ showNavigation: false });
  };

  render() {
    const {
      children,
      header,
      location,
    } = this.props;

    return (
      <div className='Main'>
        <Navigation
          showNavigation={this.state.showNavigation}
          location={location}
          onHide={this.onHideNavigation}
        />

        <div className='Main__page'>
          <Header
            onShowNavigation={this.onShowNavigation}
            header={header}
          />

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

  location: PropTypes.object,
};

Main = connect(state => ({
  header: selectors.getHeader(state),
}), {
  getInitialData: actions.getInitialData,
})(Main);

export default Main;
