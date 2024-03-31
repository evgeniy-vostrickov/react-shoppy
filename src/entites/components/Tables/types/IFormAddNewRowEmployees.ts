import { FormInstance } from "antd"
import { IFormEmployee } from "../../../../shared/ui/Tables/types/MEmployeesTable"
import { SubmitHandler } from "react-hook-form"

export default interface IFormAddNewRowEmployees {
    form: FormInstance<any>
    defaultValuesForm: IFormEmployee
    onSubmit: SubmitHandler<IFormEmployee>
}