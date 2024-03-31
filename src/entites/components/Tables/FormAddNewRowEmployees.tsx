import React, { memo } from 'react'
import { useForm } from 'react-hook-form'
// import { EventItem, EventType } from '../../../widgets/api/store/models/MCalendarSlice'
import FormItem from '../../../shared/ui/FormItem/FormItem'
import { Button, Form, Input } from 'antd'
import IFormAddNewRowEmployees from './types/IFormAddNewRowEmployees'
import { IFormEmployee } from '../../../shared/ui/Tables/types/MEmployeesTable'

const FormAddNewRowEmployees: React.FC<IFormAddNewRowEmployees> = memo(({ form, defaultValuesForm, onSubmit }) => {
    const {
        handleSubmit,
        control,
        reset,
        formState: { isSubmitSuccessful }
    } = useForm<IFormEmployee>({
        defaultValues: defaultValuesForm
    })

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <Form
            form={form}
            name="formEmployee"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            onFinish={handleSubmit(onSubmit)}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <FormItem<IFormEmployee> name="country" control={control} rules={{ required: true, maxLength: { value: 25, message: "Length <= 25" } }} paramsFormItem={{ label: "Country" }} ><Input /></FormItem>
            <FormItem<IFormEmployee> name="designation" control={control} rules={{ required: true, maxLength: { value: 25, message: "Length <= 25" } }} paramsFormItem={{ label: "Designation" }} ><Input /></FormItem>
            <FormItem<IFormEmployee> name="employee.employeeName" control={control} rules={{ required: true, maxLength: { value: 25, message: "Length <= 25" } }} paramsFormItem={{ label: "Name emoloyee" }} ><Input /></FormItem>
            <FormItem<IFormEmployee> name="employee.url" control={control} paramsFormItem={{ label: "URL image" }} ><Input /></FormItem>
            <FormItem<IFormEmployee> name="hireDate" control={control} rules={{ required: true, maxLength: { value: 25, message: "Length <= 25" } }} paramsFormItem={{ label: "Hire date" }} ><Input /></FormItem>
            <FormItem<IFormEmployee> name="reportsTo" control={control} rules={{ required: true, maxLength: { value: 25, message: "Length <= 25" } }} paramsFormItem={{ label: "Reports to" }} ><Input /></FormItem>
            {/* <FormItem<IFormEmployee> name="type" control={control} rules={{ required: false }} paramsFormItem={{ label: "Event Name" }}><SelectItem<EventType> defaultValue='success' onChange={onEventTypeChange} options={eventTypes} /></FormItem> */}

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
})

export default FormAddNewRowEmployees