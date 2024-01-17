import type { MenuProps } from 'antd';
import { ITheme } from '../../app/model/ITheme';

export interface INavbar {
    items: MenuProps['items']
    onClick: MenuProps['onClick']
    theme: ITheme
}