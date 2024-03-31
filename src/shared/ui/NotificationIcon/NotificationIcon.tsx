import React from 'react'
import INotificationIcon from './types/INotificationIcon'
import { Avatar, Badge } from 'antd'
import { useAppSelector } from '../../../app/helpers/redux'
import { NavLink } from 'react-router-dom'
import getValueForTheme from '../../../app/helpers/getValueForTheme'

const NotificationIcon: React.FC<INotificationIcon> = ({ ComponentIcon, notificationValue, hrefUrl }) => {
  const { theme } = useAppSelector(state => state.app)
  // const colorText = theme === 'light' ? 'text-black' : 'text-white'
  const colorText = getValueForTheme<string>(theme, 'text-black', 'text-white')
  
  return (
    <Badge className="ml-2.5" count={notificationValue} offset={[-10, 10]} showZero>
      <NavLink to={hrefUrl}><Avatar className={colorText + ' bg-transparent'} size={40} shape="square" icon={ComponentIcon} /></NavLink>
    </Badge>
  )
}

export default NotificationIcon
