import { FormItemProps } from 'antd';
import { ReactElement } from 'react';
import { FieldValues, UseControllerProps } from 'react-hook-form';

interface IFormItemChildren {
    children: ReactElement
}

interface IFormItemParams {
    paramsFormItem?: FormItemProps<any>
}

export type IFormItem<T extends FieldValues> = IFormItemChildren & UseControllerProps<T> & IFormItemParams