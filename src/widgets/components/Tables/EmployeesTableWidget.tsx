import React, { useState } from 'react'
import ButtonAddNewRowEmployees from '../../../features/components/Tables/ButtonAddNewRowEmployees'
import EmployeesTable from '../../../shared/ui/Tables/EmployeesTable/EmployeesTable'
import { DataTypeTableEmployees } from '../../../shared/ui/Tables/types/MEmployeesTable'

const EmployeesTableWidget = () => {
  const [dataEmployees, setDataEmployees] = useState<DataTypeTableEmployees[]>([])

  // 1 идея - rowKey
  // 2 идея - сделать обновление прям здесь

  return (
    <div>
      <ButtonAddNewRowEmployees dataEmployees={dataEmployees} setDataEmployees={setDataEmployees} />
      <EmployeesTable dataEmployees={dataEmployees} setDataEmployees={setDataEmployees} />
    </div>
  )
}

export default EmployeesTableWidget
