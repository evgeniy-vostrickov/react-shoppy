import { DataTypeTableCustomers } from "../../../../shared/ui/Tables/types/MCustomersTable"

export default interface IHandleTableDeleteRows {
    setDataSource: React.Dispatch<React.SetStateAction<DataTypeTableCustomers[]>>
    listRecordsSelected: DataTypeTableCustomers[]
}