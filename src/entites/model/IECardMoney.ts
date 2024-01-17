import React from "react"

export default interface IECard {
    summaMoney: number
    decimalPlaces: number
    textHeader: string
    colorIcon: string
    backgroundColorIcon: string
    ComponentIcon: React.ReactNode
    Button: React.ReactNode
    className?: string
}