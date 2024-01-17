type FormattingStyle = 'decimal' | 'percent'

export interface ILabelNumber {
    number: number
    styleFormatter: FormattingStyle
    decimalPlaces: number
    className?: string
    ComponentDopInfo: React.ReactNode
}