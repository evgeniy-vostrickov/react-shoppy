import { Button } from 'antd'
import React, { useCallback } from 'react'
import IHandleTableDeleteRows from './types/IHandleTableDeleteRows'

const ButtonDeleteRowCustomer: React.FC<IHandleTableDeleteRows> = ({ setDataSource, listRecordsSelected }) => {
    const handleTableDeleteRows = useCallback(() => {
        setDataSource((prevState) => {
            prevState.filter((item) => {
                listRecordsSelected.forEach((record) => {
                    if (JSON.stringify(item) === JSON.stringify(record)) {
                        return false
                    }
                })
                return true
            })
            return prevState
        }) // вместо setData должен быть вызов соответствующего action
    }, [listRecordsSelected])

    return (
        <Button onClick={handleTableDeleteRows} type="primary" style={{ marginBottom: 16 }}>
            Delete row
        </Button>
    )
}

export default ButtonDeleteRowCustomer