import { MenuProps } from "antd"

export default interface IIconAvatar {
    nameUser: string
    items: MenuProps['items']
    imgUrl?: string
    hidden?: boolean
}