import { Button, Form, Modal } from 'antd'
import React, { useCallback, useMemo, useState } from 'react'
import Title from 'antd/es/typography/Title'
import FormAddNewRowEmployees from '../../../entites/components/Tables/FormAddNewRowEmployees'
import { SubmitHandler } from 'react-hook-form'
import { IFormEmployee } from '../../../shared/ui/Tables/types/MEmployeesTable'
import { IButtonAddNewRowEmployees } from './types/IButtonAddNewRowEmployees'

const ButtonAddNewRowEmployees: React.FC<IButtonAddNewRowEmployees> = ({dataEmployees, setDataEmployees}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const defaultValuesForm = useMemo<IFormEmployee>(() => ({
        country: "",
        designation: "",
        employee: {
            employeeName: "",
            url: ""
        },
        hireDate: "",
        reportsTo: ""
    }), [])
    
    const [form] = Form.useForm()

    const onSubmit = useCallback<SubmitHandler<IFormEmployee>>((dataAboutEmployees) => {
        console.log(dataAboutEmployees)
        setDataEmployees(prevState => [...prevState, {...dataAboutEmployees, id: 12, key: 12}]) // вместо setData должен быть вызов соответствующего action
        setIsModalOpen(false)
    }, [])

    const handleCancel = useCallback(() => {
        setIsModalOpen(false)
        form.setFieldsValue(defaultValuesForm)
    }, [form, defaultValuesForm])

    // Add a new row through modal window 
    /*const addNewRowTable = async () => {
        const formValues = await form.validateFields()
        console.log(formValues)
        handleTableAddNewRow<DataTypeEmployee>({ ...objDataProps, newDataRow: formValues })
        setIsModalOpen(false)

        form.resetFields()
        reset(defaultValuesForm)
    }*/

    return (
        <>
            <Button onClick={() => { setIsModalOpen(true) }} type="primary" style={{ marginBottom: 16 }}>
                Add a row
            </Button>
            <Modal open={isModalOpen} okButtonProps={{ style: { display: "none" } }} onCancel={handleCancel}>
                <div>
                    <Title level={3}>Добавить нового сотрудника</Title>
                    <FormAddNewRowEmployees form={form} defaultValuesForm={defaultValuesForm} onSubmit={onSubmit} />
                </div>
            </Modal>
        </>
    )
}

export default ButtonAddNewRowEmployees