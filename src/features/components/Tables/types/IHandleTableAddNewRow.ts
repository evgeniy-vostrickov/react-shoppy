import { IFormEmployee } from './../../../../shared/ui/Tables/types/MEmployeesTable'
import { IButtonAddNewRowEmployees } from './IButtonAddNewRowEmployees'

export type IHandleTableAddNewRow = IButtonAddNewRowEmployees & { newDataRow: IFormEmployee }

// export type IButtonAddNewRow<T> = Pick<IHandleTableAddNewRow<T>, 'dataSource' | 'setDataSource'>