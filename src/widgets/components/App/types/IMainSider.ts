export default interface IMainSider {
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    windowSize: number
}