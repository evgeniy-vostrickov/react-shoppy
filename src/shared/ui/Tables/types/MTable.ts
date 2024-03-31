import React from 'react'
import type { TablePaginationConfig, TableProps } from 'antd/es/table'
import type { FilterValue, SortOrder } from 'antd/es/table/interface'
import { FormInstance } from "antd"
import { IPageDataRequest } from '../../../api/store/models/MOrganizationApi'

export interface TableParams {
    pagination?: TablePaginationConfig
    sortField?: string
    sortOrder?: string
    filters?: Record<string, FilterValue>
}

export const EditableContext = React.createContext<FormInstance<any> | null>(null)

export type IHandleTableChange<T> = NonNullable<TableProps<T>['onChange']>

export type DataIndex<T> = keyof T //type DataIndex = "key" | "employee" | "designation" | "country" | "hireDate" | "reportsTo"

export interface EditableRowProps {
    index: number;
}

export interface EditableCellProps<T, F> {
    title: React.ReactNode
    editable: boolean
    children: React.ReactNode
    dataIndex: T
    record: F
    handleSave: (record: F, dataIndex: T) => void
    adding: boolean
}

export type IPaginationTable = IPageDataRequest & {total: number}

// export interface TableParams {
//     pagination?: TablePaginationConfig;
// }