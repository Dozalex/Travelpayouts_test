import App    from './App';
import AppDev from './App.dev';

const isDev = process.env.NODE_ENV === 'development';

export default isDev ? AppDev : App;
