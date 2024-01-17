import { FormItemProps } from 'antd';
import { ReactElement } from 'react';
import { FieldValues, UseControllerProps } from 'react-hook-form';

type IFormItemChildren = {
    children: ReactElement
}

type IFormItemParams = {
    paramsFormItem?: FormItemProps<any>
}

export type IFormItem<T extends FieldValues> = IFormItemChildren & UseControllerProps<T> & IFormItemParams