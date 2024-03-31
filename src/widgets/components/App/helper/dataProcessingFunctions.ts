import { MenuItem } from "../types/IMenuItem"

export const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem => {
    return { label, key, icon, children, type } as MenuItem;
}