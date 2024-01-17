import React from "react"

export interface ILabelMoney {
    summa: number
    currency: string
    decimalPlaces: number
    className?: string
    ComponentDopInfo?: React.ReactNode
}