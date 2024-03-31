export interface ISelectItem<T> {
    defaultValue: T
    onChange: (value: T) => void
    options: TOption<T>[]
}

export interface TOption<T> {
    label: string
    value: T
}