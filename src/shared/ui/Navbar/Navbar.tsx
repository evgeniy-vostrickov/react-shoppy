import React, { memo } from 'react'
import { Menu } from 'antd'
import { INavbar } from './types/INavbar'


const SMenu: React.FC<INavbar> = memo(({ items, onClick, theme }) => {
  return (
    <Menu
      theme={theme}
      onClick={onClick}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  )
})

export default SMenu
