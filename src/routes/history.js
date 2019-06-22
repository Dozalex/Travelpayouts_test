import { createBrowserHistory } from 'history';

function onRouteUpdate() {
  const url = window.location.pathname + window.location.search + window.location.hash;

  if (!window.reactRouterPath || window.reactRouterPath !== url) {
    window.reactRouterPath = url;
  }
}

const history = createBrowserHistory();

history.listen(() => {
  onRouteUpdate();
});

export default history;
