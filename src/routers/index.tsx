import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as Pages from '../pages';
import { PrivateRoutes, PublicRoutes } from './Routes';
import { PrivateOutlet } from './PrivateOutlet';
import { PublicOutlet } from './PublicOutlet';

function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicOutlet />}>
          {PublicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
        <Route path='/' element={<PrivateOutlet />}>
          {PrivateRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
        <Route path='/*' element={<Pages.NotFound />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default MyRouter;
