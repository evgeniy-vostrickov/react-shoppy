import React from 'react'
import NotificationIcon from '../../../shared/ui/NotificationIcon/NotificationIcon'
import IconAvatar from '../../../shared/ui/IconAvatar/IconAvatar'
import IToolbarAccess from './types/IToolbarAccess'

const ToolbarAccess: React.FC<IToolbarAccess> = ({ collapsed, menuItems, notificationItems }) => {
  return (
    <div className="flex sm:m-2.5 sm:leading-10">
      <div className='hidden sm:block'>
        {
          notificationItems.map(item => {
            return <NotificationIcon key={item.id} ComponentIcon={item.ComponentIcon} notificationValue={item.notificationValue} hrefUrl={item.hrefUrl} />
          })
        }
      </div>
      <IconAvatar nameUser='John' imgUrl='http://file.mobilmusic.ru/01/9c/27/1263610-128.jpg' items={menuItems} hidden={!collapsed} />
    </div>
  )
}

export default ToolbarAccess