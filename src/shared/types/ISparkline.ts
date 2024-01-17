export default interface ISparkline {
    data: ObjGraph[]
    typeGraph: "Line" | "Column" | "WinLoss" | "Pie" | "Area" | undefined
}

type ObjGraph = {
    x: number
    xval: string
    yval: number
}