import { FilterValue, SortOrder } from "antd/es/table/interface"
import { OrderStatusType } from "../../../types/IOrderTable"

export interface DataTypeOrder {
    id: number
    order_id: string
    image: string
    group: string
    name: string
    amount: number
    status: OrderStatusType
    location: string
}

export interface IOrganizationState {
    orders: Array<DataTypeOrder>
    total: number
    pageSize: number
}

export interface IPageDataRequest {
    current: number
    pageSize: number
    field?: React.Key | readonly React.Key[]
    order?: SortOrder
    filters?: Record<string, FilterValue | null>
}

export interface IResponse<T> {
    status: number
    data: T
}

export interface IDataOrders {
    orders: DataTypeOrder[]
    total: number
}