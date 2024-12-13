import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />
        <Route path={`${APP_PREFIX_PATH}/catalog/product-list`} component={lazy(() => import(`./productList`))} />
        <Route path={`${APP_PREFIX_PATH}/catalog/categories`} component={lazy(() => import(`./home`))} />
        <Route path={`${APP_PREFIX_PATH}/catalog/collections`} component={lazy(() => import(`./home`))} />
        <Route path={`${APP_PREFIX_PATH}/orders`} component={lazy(() => import(`./home`))} />
        <Route path={`${APP_PREFIX_PATH}/users/user-list`} component={lazy(() => import(`./userList`))} />
        <Route path={`${APP_PREFIX_PATH}/edit-profile/:userId`} component={lazy(() => import(`./editProfile`))} />
        <Route path={`${APP_PREFIX_PATH}/users/user-group`} component={lazy(() => import(`./home`))} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);