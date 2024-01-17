import { Button, Checkbox, Form, Input } from 'antd';
import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import FormItem from '../../../shared/ui/FormItem/FormItem';
import { IFieldType } from '../../../shared/types/IFieldType';

const AuthorizationForm: React.FC = () => {
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }
    const onSubmit: SubmitHandler<IFieldType> = (data) => {
        console.log(data)
    }
    const defaultValuesForm = {
        username: '',
        password: '',
        remember: true
    }
    const {
        handleSubmit,
        control,
        reset,
        formState: {isSubmitSuccessful}
    } = useForm<IFieldType>({
        defaultValues: defaultValuesForm
    })
    const [form] = Form.useForm()

    useEffect(() => {
        form.setFieldsValue(defaultValuesForm)
    }, [])
    
    useEffect(() => {
        if (isSubmitSuccessful) {
            form.setFieldsValue(defaultValuesForm)
            reset(defaultValuesForm)
        }
    }, [isSubmitSuccessful, reset])


    return (
        <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={handleSubmit(onSubmit)}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <FormItem<IFieldType> name="username" control={control} rules={{ required: false, maxLength: { value: 5, message: "Length <= 5" } }} paramsFormItem={{ label: "Username" }} ><Input /></FormItem>
            <FormItem<IFieldType> name="password" control={control} rules={{ required: "Please input your password!" }} paramsFormItem={{ label: "Password" }} ><Input.Password /></FormItem>
            <FormItem<IFieldType> name="remember" control={control} paramsFormItem={{ valuePropName: "checked", wrapperCol: { offset: 8, span: 16 } }} ><Checkbox>Remember me</Checkbox></FormItem>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default AuthorizationForm