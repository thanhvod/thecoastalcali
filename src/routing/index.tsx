import { Route, Switch, Redirect } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import * as ROUTINGS from './path';

const LazyLoading = () => <div></div>;
// const Home = lazy(() => import('../container/home'));

const Home = lazy(() => import('../container/home'));

export default () => (
  <Suspense fallback={<LazyLoading />}>
    <Switch>
      <Route exact path={ROUTINGS.ROUTING_HOME} render={() => <Home />} />
      <Route exact path={ROUTINGS.ROUTING_FUNNY_QR} render={() => <Home />} />

      <Route path={'*'} render={(routeProps: any) => <Home />} />
    </Switch>
  </Suspense>
);
