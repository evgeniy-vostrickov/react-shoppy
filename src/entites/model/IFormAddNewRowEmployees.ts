import { FormInstance } from "antd";
import { IEmployee, IFormEmployee } from "../../widgets/Tables/models/MEmployeesTable";
import { SubmitHandler } from "react-hook-form";

export default interface IFormAddNewRowEmployees {
    form: FormInstance<any>
    defaultValuesForm: IFormEmployee
    onSubmit: SubmitHandler<IEmployee>
}