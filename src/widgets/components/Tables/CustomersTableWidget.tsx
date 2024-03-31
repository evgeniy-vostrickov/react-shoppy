import React, { useState } from 'react'
import { DataTypeTableCustomers } from '../../../shared/ui/Tables/types/MCustomersTable'
import ButtonDeleteRowCustomer from '../../../features/components/Tables/ButtonDeleteRowCustomer'
import CustomersTable from '../../../shared/ui/Tables/CustomersTable/CustomersTable'

const CustomersTableWidget: React.FC = () => {
    const [dataCustomers, setDataCustomers] = useState<DataTypeTableCustomers[]>([])
    const [listRecordsSelected, setListRecordsSelected] = useState<DataTypeTableCustomers[]>([])

    return (
        <div>
            <ButtonDeleteRowCustomer listRecordsSelected={listRecordsSelected} setDataSource={setDataCustomers} />
            <CustomersTable dataCustomers={dataCustomers} setDataCustomers={setDataCustomers} setListRecordsSelected={setListRecordsSelected} />
        </div>
    )
}

export default CustomersTableWidget