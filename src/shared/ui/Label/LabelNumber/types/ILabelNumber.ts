type FormattingStyle = 'decimal' | 'percent'

export interface ILabelNumber {
    number: number
    styleFormatter: FormattingStyle
    className?: string
    ComponentDopInfo: React.ReactNode
}