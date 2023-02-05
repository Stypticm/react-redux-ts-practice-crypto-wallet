import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from 'Layout/MainLayout';
import LoginPage from 'pages/LoginPage/LoginPage';
import { ErrorPage } from 'pages/ErrorPage/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LoginPage />} />
      <Route path="error" element={<ErrorPage />} />
    </Route>
  )
)

export const MainLayout = () => <RouterProvider router={router} />;
