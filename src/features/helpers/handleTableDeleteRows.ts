import IHandleTableDeleteRows from "../model/IHandleTableDeleteRows"

const handleTableDeleteRows = <T,>({dataSource, setDataSource, listRecordsSelected}: IHandleTableDeleteRows<T>) => {
    let results = dataSource
    // Добавить условие для удаления одной строки
    for (const record of listRecordsSelected) {
        results = results.filter(item => JSON.stringify(item) !== JSON.stringify(record))
    }
    setDataSource(results) // вместо setData должен быть вызов соответствующего action
}

export default handleTableDeleteRows