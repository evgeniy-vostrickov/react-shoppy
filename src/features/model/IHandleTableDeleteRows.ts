export default interface IHandleTableDeleteRows<T> {
    dataSource: T[]
    setDataSource: (dataSource: T[]) => void
    listRecordsSelected: T[]
}