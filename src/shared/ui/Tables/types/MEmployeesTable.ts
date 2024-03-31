import Table from 'antd/es/table'
import { DataIndex } from "./MTable"
import { DataTypeEmployee } from '../../../api/store/models/MOrganizationSlice'

export interface DataTypeTableEmployees extends DataTypeEmployee {
    key: React.Key
}

export type IFormEmployee = Omit<DataTypeEmployee, 'id'>

export type DataEmployeesIndex = DataIndex<DataTypeTableEmployees>

export interface EmployeeField {
    url: string
    employeeName: string
}

type EditableTableProps = Parameters<typeof Table>[0]
export type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>

export type DefaultColumnsType = ColumnTypes[number] & { editable?: boolean; dataIndex?: string }

export interface IEmployeesTable {
    dataEmployees: DataTypeTableEmployees[]
    setDataEmployees: React.Dispatch<React.SetStateAction<DataTypeTableEmployees[]>>
}