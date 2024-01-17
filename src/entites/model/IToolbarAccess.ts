import { MenuProps } from "antd"
import { INotificationItem } from "../../widgets/model/IMainHeader"

export default interface IToolbarAccess {
    collapsed: boolean
    menuItems: MenuProps['items']
    notificationItems: INotificationItem[]
}