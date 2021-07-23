import React from 'react';
import { Route } from 'react-router-dom';
// import { getAllowRouter } from 'utils/permission';
import ErrorBoundary from '../components/errorBoundary';
// import NotAuth from 'page/notAuth';

export interface IAppProps {
  permissions?: string[];
  component: any;
  path: string;
  exact?: boolean;
  render?: any;
  children?: any;
  redirect?: any;
}

const PrivateRoute = (props: IAppProps) => {
  const { children, component: Component, ...rest } = props;
//   const allowRouter = getAllowRouter(userStore.userInfo.auth || []);
  const allowRouter:any[] = [];

  const routerHasAuth = allowRouter.some((item: string) => rest.path.split('/').includes(item));
  // console.log(allowRouter, path, routerHasAuth);

  return (
    <Route
      exact={props.exact}
      {...rest}
      render={(renderProps:any) => (
        <ErrorBoundary>
          {routerHasAuth ? <Component {...renderProps}>{children || []}</Component> : <div>404</div>}
        </ErrorBoundary>
      )}
    />
  );
};

export default PrivateRoute;
