import { DataTypeTableEmployees } from "../../../../shared/ui/Tables/types/MEmployeesTable"

// export type IButtonAddNewRowEmployees = IButtonAddNewRow<DataTypeTableEmployees>
export interface IButtonAddNewRowEmployees {
  dataEmployees: DataTypeTableEmployees[]
  setDataEmployees: React.Dispatch<React.SetStateAction<DataTypeTableEmployees[]>>
}