import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Ecommerce from '../../pages/components/Ecommerce/Ecommerce';
import ErrorPage from '../../pages/components/ErrorPage/ErrorPage';
import Root from '../../pages/components/Root/Root';
import Orders from '../../pages/components/Orders/Orders';
import Employess from '../../pages/components/Employees/Employess';
import Customers from '../../pages/components/Customers/Customers';
import Login from '../../pages/components/Login/Login';
import WCalendar from '../../widgets/components/WCalendar/WCalendar';

export const enum RouteNames {
  MAIN = '/',
  LOGIN = 'login',
  ECOMMERCE = 'ecommerce',
  ORDERS = 'orders',
  EMPLOYEES = 'employees',
  CUSTOMERS = 'customers',
  CALENDAR = 'calendar',
}

const publicRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path={RouteNames.MAIN} element={<Root />} errorElement={<ErrorPage />}>
      <Route path={RouteNames.ECOMMERCE} element={<Ecommerce />} />
      <Route path={RouteNames.ORDERS} element={<Orders />} />
      <Route path={RouteNames.EMPLOYEES} element={<Employess />} />
      <Route path={RouteNames.CUSTOMERS} element={<Customers />} />
      <Route path={RouteNames.CALENDAR} element={<WCalendar />} />
      <Route path={RouteNames.LOGIN} element={<Login />} />
    </Route>
  )
);

const privateRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path={RouteNames.MAIN} element={<Root />} errorElement={<ErrorPage />}>
      <Route path={RouteNames.ECOMMERCE} element={<Ecommerce />} />
      <Route path={RouteNames.ORDERS} element={<Orders />} />
      <Route path={RouteNames.EMPLOYEES} element={<Employess />} />
      <Route path={RouteNames.CUSTOMERS} element={<Customers />} />
      <Route path={RouteNames.CALENDAR} element={<WCalendar />} />
      <Route path={RouteNames.LOGIN} element={<Login />} />
    </Route>
  )
);

const AppRouter: React.FC = () => {
    const auth: boolean = true
    return (
        auth === true ?
        <RouterProvider router={privateRouter} />
        :
        <RouterProvider router={publicRouter} />   
    )
}

export default AppRouter