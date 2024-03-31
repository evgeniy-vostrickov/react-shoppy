import { MenuProps } from "antd"
import { INotificationItem } from "../../../../widgets/components/App/types/IMainHeader"

export default interface IToolbarAccess {
    collapsed: boolean
    menuItems: MenuProps['items']
    notificationItems: INotificationItem[]
}