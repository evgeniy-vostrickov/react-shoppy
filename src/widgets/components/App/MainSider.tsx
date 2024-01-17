import React, {useEffect} from 'react'
import { MenuItem } from '../../model/IMenuItem';
import { MenuProps } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import { ImDrawer } from 'react-icons/im'
import SMenu from '../../../shared/ui/Navbar/Navbar';
import { getItem } from '../../const/dataProcessingFunctions';
import Sider from 'antd/es/layout/Sider';
import IMainSider from '../../model/IMainSider';
import { NavLink } from 'react-router-dom';
import { RouteNames } from '../../../app/router/AppRouter';
import { useAppSelector } from '../../../app/helpers/redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsCalendarRangeFill, BsFillPeopleFill } from 'react-icons/bs';
import { FaPeopleArrows } from 'react-icons/fa';

const MainSider: React.FC<IMainSider> = ({collapsed, setCollapsed, windowSize}) => {

  const { theme } = useAppSelector(state => state.app)

  const menuItems: MenuProps['items'] = [
    getItem('DASHBOARD', 'grp1', null, [
      getItem(<NavLink to={RouteNames.ECOMMERCE}>Ecommerce</NavLink>, RouteNames.ECOMMERCE, <ImDrawer />),
    ], 'group'),
    getItem('PAGES', 'grp2', null, [
      getItem(<NavLink to={RouteNames.ORDERS}>Orders</NavLink>, RouteNames.ORDERS, <AiOutlineShoppingCart />),
      getItem(<NavLink to={RouteNames.EMPLOYEES}>Employees</NavLink>, RouteNames.EMPLOYEES, <BsFillPeopleFill />),
      getItem(<NavLink to={RouteNames.CUSTOMERS}>Customers</NavLink>, RouteNames.CUSTOMERS, <FaPeopleArrows />),
    ], 'group'),
    getItem('APPS', 'grp3', null, [
      getItem(<NavLink to={RouteNames.CALENDAR}>Calendar</NavLink>, RouteNames.CALENDAR, <BsCalendarRangeFill />),
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
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    if (windowSize < 768)
      setCollapsed(true)
    console.log('click ', e);
    // document.querySelector('.ant-menu-item-selected')?.classList.add('light')
    // console.log(document.querySelector('.ant-menu-item-selected')?.classList)
    // document.querySelector('.ant-menu-item-selected')?.classList.add(theme === 'dark' ? 'bg-[#64748b]!' : 'bg-[#cbd5e1]!')
    // document.querySelector('.ant-menu-item-selected')?.setAttribute('style', 'background-color: #64748b !important')
  };

  useEffect(() => {
    console.log(windowSize)
  }, [windowSize])
  
  return (
    <Sider trigger={null} theme={theme} collapsible collapsed={collapsed}>
      <div className="h-12 m-3 bg-zinc-500" />
      <SMenu items={menuItems} onClick={onClick} theme={theme} />
    </Sider>
  )
}

export default MainSider