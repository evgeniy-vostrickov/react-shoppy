export interface ISelectItem<T> {
    defaultValue: T
    onChange: (value: T) => void
    options: TOption<T>[]
}

export type TOption<T> = {
    label: string,
    value: T
}