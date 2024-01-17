export interface IHandleTableAddNewRow<T> {
    dataSource: T[]
    setDataSource: (dataSource: T[]) => void
    newDataRow: T
}

export type IButtonAddNewRow<T> = Pick<IHandleTableAddNewRow<T>, 'dataSource' | 'setDataSource'>