export default interface IMainHeader {
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

export type INotificationItem = {
    id: number
    ComponentIcon: React.ReactNode
    notificationValue: number
    hrefUrl: string
}