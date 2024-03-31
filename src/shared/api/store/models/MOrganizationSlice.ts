import { CustomerField, CustomersStatusType } from "../../../ui/Tables/types/MCustomersTable"
import { EmployeeField } from "../../../ui/Tables/types/MEmployeesTable"
import { OrderStatusType } from "../../../ui/Tables/types/MOrdersTable"

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

export interface DataTypeEmployee {
    id: number
    employee: EmployeeField
    designation: string
    country: string
    hireDate: string
    reportsTo: string
}

export interface DataTypeCustomer {
    id: number
    customer: CustomerField
    weeks: number
    status: CustomersStatusType
    projectName: string
    budget: string
    location: string
}

export interface TDataForSparkline {
    year: string
    value: number
}

export interface IOrganizationState {
    orders: Array<DataTypeOrder>
    total: number
    pageSize: number
    dataForSparkline: TDataForSparkline[]
}
