import { Form } from 'antd'
import React, { Children, ReactElement } from 'react'
import { FieldValues, useController } from 'react-hook-form'
import { IFormItem } from './types/IFormItem'

const FormItem = <T extends FieldValues>({ children, paramsFormItem, ...params }: IFormItem<T>) => {
    const { field, fieldState: { error } } = useController(params)
    const ChildrenElement = React.cloneElement(Children.only(children) as ReactElement, field)

    return (
        <Form.Item<T>
            name={params.name}
            initialValue={params.defaultValue}
            rules={[{ required: params.rules?.required ? true : false }]}
            validateStatus={error ? "error" : "validating"}
            help={error && error.message}
            {...paramsFormItem}
        >
            {ChildrenElement}
            {/* <Form.ErrorList errors={errors} /> */}
        </Form.Item>
    )
}

export default FormItem

// Через компонент <Controller>
/*
const FormItem: React.FC<IFormItem> = ({ children, ...params }) => {
    return (
        <Controller
            name={params.name}
            control={params.control}
            rules={params.rules}
            render={({ field }) => {
                const ChildrenElement = React.cloneElement(Children.only(children) as ReactElement, field)
                return (
                    <Form.Item<IFieldType>
                        label={params.name[0].toUpperCase() + params.name.slice(1)}
                        name={params.name}
                        rules={[{ required: params.rules?.required ? true : false, message: `Please input your ${params.name}!` }]}
                    >
                        {ChildrenElement}
                    </Form.Item>
                )
            }}
        />
    )
}
*/