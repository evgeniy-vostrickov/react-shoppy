export interface IMainHeader {
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

export interface INotificationItem {
    id: number
    ComponentIcon: React.ReactNode
    notificationValue: number
    hrefUrl: string
}