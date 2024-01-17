import React from 'react'
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { INavbar } from '../../types/INavbar';
import { useAppSelector } from '../../../app/helpers/redux';


const SMenu: React.FC<INavbar> = ({items, onClick, theme}) => {
      return (
        <Menu
          theme={theme}
          onClick={onClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
      );
}

export default SMenu