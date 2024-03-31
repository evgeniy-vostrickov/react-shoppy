import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsCalendarRangeFill, BsFillPeopleFill } from 'react-icons/bs'
import { FaPeopleArrows } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { AppstoreOutlined } from '@ant-design/icons'
import { ImDrawer } from 'react-icons/im'
import { MenuProps } from 'antd'
import { getItem } from '../helper/dataProcessingFunctions'
import { RoutesNames } from '../../../../app/const/routesNames'

const siderMenuItems: MenuProps['items'] = [
  getItem('DASHBOARD', 'grp1', null, [
    getItem(<NavLink to={RoutesNames.ECOMMERCE}>Ecommerce</NavLink>, RoutesNames.ECOMMERCE, <ImDrawer />),
  ], 'group'),
  getItem('PAGES', 'grp2', null, [
    getItem(<NavLink to={RoutesNames.ORDERS}>Orders</NavLink>, RoutesNames.ORDERS, <AiOutlineShoppingCart />),
    getItem(<NavLink to={RoutesNames.EMPLOYEES}>Employees</NavLink>, RoutesNames.EMPLOYEES, <BsFillPeopleFill />),
    getItem(<NavLink to={RoutesNames.CUSTOMERS}>Customers</NavLink>, RoutesNames.CUSTOMERS, <FaPeopleArrows />),
  ], 'group'),
  getItem('APPS', 'grp3', null, [
    getItem(<NavLink to={RoutesNames.CALENDAR}>Calendar</NavLink>, RoutesNames.CALENDAR, <BsCalendarRangeFill />),
    getItem('Editor', '6', <AppstoreOutlined />),
    getItem('Kanban', '7', <AppstoreOutlined />),
    getItem('Color-Picker', '8', <AppstoreOutlined />),
  ], 'group'),
  getItem('CHARTS', 'grp4', null, [
    getItem('Line', '9', <AppstoreOutlined />),
    getItem('Area', '10', <AppstoreOutlined />),
    getItem('Bar', '11', <AppstoreOutlined />),
    getItem('Pie', '12', <AppstoreOutlined />),
  ], 'group'),
  getItem('Financial', '13', <AppstoreOutlined />),
]

export default siderMenuItems