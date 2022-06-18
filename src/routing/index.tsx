import { Route, Switch, Redirect } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import * as ROUTINGS from './path';

const LazyLoading = () => <div></div>;

const Image = lazy(() => import('../container/image'));
const Menu = lazy(() => import('../container/menu'));
const Order = lazy(() => import('../container/order'));

export default () => (
  <Suspense fallback={<LazyLoading />}>
    <Switch>
      <Route exact path={ROUTINGS.ROUTING_ORDER} render={() => <Order />} />
      <Route exact path={ROUTINGS.ROUTING_MENU} render={() => <Menu />} />
      <Route exact path={ROUTINGS.ROUTING_IMAGE} render={() => <Image />} />

      <Route path={'*'} render={(routeProps: any) => <Order />} />
    </Switch>
  </Suspense>
);
