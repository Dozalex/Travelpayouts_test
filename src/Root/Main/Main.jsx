import * as actions from 'Root/modules/actions';

class Main extends PureComponent {
  componentDidMount() {
    this.props.getInitialData();
  }

  render() {
    return null;
  }
}

Main.propTypes = {
  getInitialData: PropTypes.func,
};

Main = connect(null, {
  getInitialData: actions.getInitialData,
})(Main);

export default Main;
