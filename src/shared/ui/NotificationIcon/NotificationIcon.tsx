import React from 'react'
import { AiFillContainer } from "react-icons/ai";
import clasess from "./NotificationIcon.module.css"
import INotificationIcon from '../../types/INotificationIcon';
import { Avatar, Badge, Button } from 'antd';
import { useAppSelector } from '../../../app/helpers/redux';
import { NavLink } from 'react-router-dom';

const NotificationIcon: React.FC<INotificationIcon> = ({ ComponentIcon, notificationValue, hrefUrl }) => {
  const { theme } = useAppSelector(state => state.app)
  const colorText = theme === 'light' ? 'text-black' : 'text-white'
  return (
    <Badge className="ml-2.5" count={notificationValue} offset={[-10, 10]} showZero>
      <NavLink to={hrefUrl}><Avatar className={colorText + ' bg-transparent'} size={40} shape="square" icon={ComponentIcon} /></NavLink>
    </Badge>

  )
}

export default NotificationIcon