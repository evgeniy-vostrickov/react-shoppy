import { NavLink } from 'react-router-dom'
import { getItem } from '../helper/dataProcessingFunctions'
import { MenuProps } from 'antd'
import { RoutesNames } from '../../../../app/const/routesNames'

const headerMenuItems: MenuProps['items'] = [
  getItem(<NavLink className={'text-blue-700 hover:text-blue-950'} to={RoutesNames.ORDERS}>Orders</NavLink>, RoutesNames.ORDERS,),
  getItem(<NavLink className={'text-blue-700 hover:text-blue-950'} to={RoutesNames.EMPLOYEES}>Employees</NavLink>, RoutesNames.EMPLOYEES,),
  getItem(<NavLink className={'text-blue-700 hover:text-blue-950'} to={RoutesNames.CUSTOMERS}>Customers</NavLink>, RoutesNames.CUSTOMERS,),
]

export default headerMenuItems