import * as Pages from '../pages';
import { RouteProps } from 'react-router-dom';

export const PublicRoutes: RouteProps[] = [
  { path: '/', element: <Pages.Home /> },
  {
    path: '/register',
    element: <Pages.Register />,
  },
  {
    path: '/login',
    element: <Pages.Login />,
  },
];

export const PrivateRoutes = [
  {
    path: '/dashboard',
    element: <Pages.Dashboard />,
  },
];
