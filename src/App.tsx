import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

import MainLayout from './Layout/MainLayout';
import Charts from './pages/MainPage/charts/Charts';
import Crypts from './pages/MainPage/crypts/Crypts';
import Orders from './pages/MainPage/orders/Orders';
import Settings from './pages/MainPage/settings/Settings';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route path='orders' element={<Orders />} />
      <Route path='charts' element={<Charts />} />
      <Route path='crypts' element={<Crypts/>} />
      <Route path="settings" element={<Settings/>} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
