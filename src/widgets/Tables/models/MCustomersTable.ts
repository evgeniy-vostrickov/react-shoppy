export type CustomerField = {
    image: string
    name: string
    email: string
}

export interface DataTypeCustomers {
    key: React.Key
    customerId: number,
    customer: CustomerField
    weeks: number
    status: CustomersStatusType
    projectName: string
    budget: string
    location: string
}

export type CustomersStatusType = keyof CustomersStatusColor;

export interface CustomersStatusColor {
    Active: string,
    Cancel: string,
    Completed: string,
    Pending: string,
}