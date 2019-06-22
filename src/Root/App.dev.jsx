import DevTools from 'DevTools';

import AppProd from './App';

class App extends Component {
  render() {
    return (
      <AppProd>
        <DevTools />
      </AppProd>
    );
  }
}

export default App;
