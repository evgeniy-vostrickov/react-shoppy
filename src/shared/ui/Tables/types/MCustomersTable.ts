import { DataTypeCustomer } from "../../../api/store/models/MOrganizationSlice"

export interface CustomerField {
    image: string
    name: string
    email: string
}

// export interface DataTypeCustomers {
//     key: React.Key
//     customerId: number,
//     customer: CustomerField
//     weeks: number
//     status: CustomersStatusType
//     projectName: string
//     budget: string
//     location: string
// }

export interface DataTypeTableCustomers extends DataTypeCustomer {
    key: React.Key
    customerId: number
}

export type CustomersStatusType = keyof CustomersStatusColor

export interface CustomersStatusColor {
    Active: string,
    Cancel: string,
    Completed: string,
    Pending: string,
}

export interface ICustomersTable {
    dataCustomers: DataTypeTableCustomers[]
    setListRecordsSelected: React.Dispatch<React.SetStateAction<DataTypeTableCustomers[]>>
    setDataCustomers: React.Dispatch<React.SetStateAction<DataTypeTableCustomers[]>>
}