import { IEEarning } from "../../Ecommerce/types/IEEarnings"
import { IEExpenses } from "../../Ecommerce/types/IEExpenses"
import { IERevenue } from "../../Ecommerce/types/IERevenue"
import { IEStatisticsResponse } from "../../Ecommerce/types/IEStatistics"

export type IDataStatistics = IEStatisticsResponse[]
export type IDataEarnings = IEEarning[]
export type IDataExpenses = IEExpenses[]
export type IDataRevenue = IERevenue[]