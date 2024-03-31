export interface IEStatisticsResponse {
  id: number
  textInscription: string
  numberValue: number
  riseValue: number
}

export interface IEStatistics {
  id: number
  textInscription: string
  numberValue: number
  colorIcon: string
  backgroundColorIcon: string
  ComponentIcon: React.ReactNode
  rise: boolean
  riseValue: string
}
