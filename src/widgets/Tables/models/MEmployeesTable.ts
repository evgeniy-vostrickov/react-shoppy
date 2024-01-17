import { DataIndex } from "./MTable"

// Нужно объединить два этих интерфейса
export interface DataTypeEmployees {
    // key: React.Key
    id: number
    employee: EmployeeField
    designation: string
    country: string
    hireDate: string
    reportsTo: string
}

export interface IEmployee {
    id: number
    employee: EmployeeField
    designation: string
    country: string
    hireDate: string
    reportsTo: string
}

export type IFormEmployee = Pick<IEmployee, Exclude<keyof IEmployee, 'id'>>

export type DataEmployeesIndex = DataIndex<DataTypeEmployees>

export type EmployeeField = {
    url: string
    employeeName: string
}