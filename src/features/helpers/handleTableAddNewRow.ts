import { IHandleTableAddNewRow } from "../model/IHandleTableAddNewRow";

const handleTableAddNewRow = <T,>({dataSource, setDataSource, newDataRow}: IHandleTableAddNewRow<T>) => {
    setDataSource([...dataSource, {...newDataRow, id: 12}]); // вместо setData должен быть вызов соответствующего action
};

export default handleTableAddNewRow