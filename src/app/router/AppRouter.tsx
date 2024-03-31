import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Ecommerce from '../../pages/components/Ecommerce/Ecommerce'
import ErrorPage from '../../pages/components/ErrorPage/ErrorPage'
import Root from '../../pages/components/Root/Root'
import Orders from '../../pages/components/Orders/Orders'
import Employees from '../../pages/components/Employees/Employees'
import Customers from '../../pages/components/Customers/Customers'
import Login from '../../pages/components/Login/Login'
import CalendarWidget from '../../widgets/components/Calendar/CalendarWidget'
import { RoutesNames } from '../const/routesNames'

const publicRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path={RoutesNames.MAIN} element={<Root />} errorElement={<ErrorPage />}>
      <Route path={RoutesNames.ECOMMERCE} element={<Ecommerce />} />
      <Route path={RoutesNames.ORDERS} element={<Orders />} />
      <Route path={RoutesNames.EMPLOYEES} element={<Employees />} />
      <Route path={RoutesNames.CUSTOMERS} element={<Customers />} />
      <Route path={RoutesNames.CALENDAR} element={<CalendarWidget />} />
      <Route path={RoutesNames.LOGIN} element={<Login />} />
    </Route>
  )
)

const privateRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path={RoutesNames.MAIN} element={<Root />} errorElement={<ErrorPage />}>
      <Route path={RoutesNames.ECOMMERCE} element={<Ecommerce />} />
      <Route path={RoutesNames.ORDERS} element={<Orders />} />
      <Route path={RoutesNames.EMPLOYEES} element={<Employees />} />
      <Route path={RoutesNames.CUSTOMERS} element={<Customers />} />
      <Route path={RoutesNames.CALENDAR} element={<CalendarWidget />} />
      <Route path={RoutesNames.LOGIN} element={<Login />} />
    </Route>
  )
)

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