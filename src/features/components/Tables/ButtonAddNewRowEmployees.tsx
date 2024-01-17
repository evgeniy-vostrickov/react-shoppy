import { Button, Form, Modal } from 'antd'
import React, { useState } from 'react'
import handleTableAddNewRow from '../../helpers/handleTableAddNewRow';
import Title from 'antd/es/typography/Title';
import FormAddNewRowEmployees from '../../../entites/components/Tables/FormAddNewRowEmployees';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IEmployee, IFormEmployee } from '../../../widgets/Tables/models/MEmployeesTable';
import { IButtonAddNewRowEmployees } from '../../model/IButtonAddNewRowEmployees';

const ButtonAddNewRowEmployees: React.FC<IButtonAddNewRowEmployees> = (objDataProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const defaultValuesForm: IFormEmployee = {
        country: "",
        designation: "",
        employee: {
            employeeName: "",
            url: ""
        },
        hireDate: "",
        reportsTo: ""
    }
    const {
        handleSubmit,
        reset
    } = useForm<IEmployee>({
        defaultValues: defaultValuesForm
    })
    const [form] = Form.useForm()

    const onSubmit: SubmitHandler<IEmployee> = (dataAboutEmployees) => {
        console.log(dataAboutEmployees)
        handleTableAddNewRow<IEmployee>({ ...objDataProps, newDataRow: dataAboutEmployees })
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
        form.setFieldsValue(defaultValuesForm)
    }

    // Add a new row through modal window 
    /*const addNewRowTable = async () => {
        const formValues = await form.validateFields()
        console.log(formValues)
        handleTableAddNewRow<IEmployee>({ ...objDataProps, newDataRow: formValues })
        setIsModalOpen(false)

        form.resetFields()
        reset(defaultValuesForm)
    }*/

    return (
        <>
            <Button onClick={() => { setIsModalOpen(true) }} type="primary" style={{ marginBottom: 16 }}>
                Add a row
            </Button>
            <Modal open={isModalOpen} okButtonProps={{style: {display: "none"}}} onCancel={handleCancel}>
                <div>
                    <Title level={3}>Добавить нового сотрудника</Title>
                    <FormAddNewRowEmployees form={form} defaultValuesForm={defaultValuesForm} onSubmit={onSubmit} />
                </div>
            </Modal>
        </>
    )
}

export default ButtonAddNewRowEmployees