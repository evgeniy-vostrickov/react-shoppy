import { Button } from 'antd'
import React from 'react'
import handleTableDeleteRows from '../../helpers/handleTableDeleteRows'
import IHandleTableDeleteRows from '../../model/IHandleTableDeleteRows'

const ButtonDeleteRowCustomer = <T,>(objDataProps: IHandleTableDeleteRows<T>) => {
    return (
        <Button onClick={() => handleTableDeleteRows(objDataProps)} type="primary" style={{ marginBottom: 16 }}>
            Delete row
        </Button>
    )
}

export default ButtonDeleteRowCustomer