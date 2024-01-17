import React, {useState} from 'react'
import { MenuProps } from 'antd';
import { getItem } from '../../const/dataProcessingFunctions';
import ToolbarAccess from '../../../entites/components/Header/ToolbarAccess';
import HamburgerMenu from '../../../shared/ui/HamburgerMenu/HamburgerMenu';
import { Header } from 'antd/es/layout/layout';
import IMainHeader, { INotificationItem } from '../../model/IMainHeader';
import { AiFillCalendar, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiMessageAltDetail } from 'react-icons/bi';
import { IoMdNotifications } from 'react-icons/io';
import { useAppSelector } from '../../../app/helpers/redux';
import { NavLink } from 'react-router-dom';
import { RouteNames } from '../../../app/router/AppRouter';

const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
};

// <NotificationIcon ComponentIcon={<AiFillContainer />} notificationValue={3} />
const notificationItems: INotificationItem[] = [
    {
        id: 1,
        ComponentIcon: <AiOutlineShoppingCart size={36} />, 
        notificationValue: 1,
        hrefUrl: "#",
    },
    {
        id: 2,
        ComponentIcon: <BiMessageAltDetail size={36} />,
        notificationValue: 2,
        hrefUrl: "#",
    },
    {
        id: 3,
        ComponentIcon: <IoMdNotifications size={36} />,
        notificationValue: 3,
        hrefUrl: "#",
    },
]


const MainHeader: React.FC<IMainHeader> = ({collapsed, setCollapsed}) => {
    const { theme } = useAppSelector(state => state.app)
    const bgStyle = theme === 'light' ? "bg-white" : "bg-[#001529]"

    const menuItems: MenuProps['items'] = [
        getItem(<NavLink className={'text-blue-700 hover:text-blue-950'} to={RouteNames.ORDERS}>Orders</NavLink>, RouteNames.ORDERS,),
        getItem(<NavLink className={'text-blue-700 hover:text-blue-950'} to={RouteNames.EMPLOYEES}>Employees</NavLink>, RouteNames.EMPLOYEES,),
        getItem(<NavLink className={'text-blue-700 hover:text-blue-950'} to={RouteNames.CUSTOMERS}>Customers</NavLink>, RouteNames.CUSTOMERS,),
    ];

    return (
        <Header className={bgStyle + " flex justify-between p-0"}>
            <HamburgerMenu collapsed={collapsed} setCollapsed={setCollapsed} />
            <ToolbarAccess collapsed={collapsed} menuItems={menuItems} notificationItems={notificationItems} />
        </Header>
    )
}

export default MainHeader