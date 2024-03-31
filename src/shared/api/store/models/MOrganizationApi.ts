import { FilterValue, SortOrder } from "antd/es/table/interface"
import { DataTypeCustomer, DataTypeEmployee, DataTypeOrder } from "./MOrganizationSlice"

export interface IPageDataRequest {
  current: number
  pageSize: number
  field?: React.Key | readonly React.Key[]
  order?: SortOrder
  filters?: Record<string, FilterValue | null>
}

export interface IDataOrders {
  orders: DataTypeOrder[]
  total: number
}

// export interface IDataEmployees {
//   employees: DataTypeEmployee[]
// }

// export interface IDataCustomers {
//   customers: DataTypeCustomer[]
// }