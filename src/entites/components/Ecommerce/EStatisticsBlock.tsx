import React, { useEffect, useState } from 'react'
import { IEStatistics } from './types/IEStatistics'
import ECardInfo from './EcommerceCard/ECardInfo'
import { useGetStatisticsQuery } from '../store/slices/ecommerce.api'
import { procesStatistics } from './helpers/procesStatistics'

const EStatisticsBlock = () => {
  const { isLoading, isFetching, isError, error, data: statisticsWithQuery } = useGetStatisticsQuery()
  const [statistics, setStatistics] = useState<IEStatistics[]>([])

  useEffect(() => {
    if (statisticsWithQuery) {
      const newStatistics = procesStatistics(statisticsWithQuery)
      setStatistics(newStatistics)
    }
  }, [statisticsWithQuery])
  
  return (
    <>
      {
        statistics.map((item) => {
          return <ECardInfo
            numberValue={item.numberValue}
            colorIcon={item.colorIcon}
            backgroundColorIcon={item.backgroundColorIcon}
            ComponentIcon={item.ComponentIcon}
            textInscription={item.textInscription}
            rise={item.rise}
            riseValue={item.riseValue}
            key={item.id}
          />
        })
      }
    </>
  )
}

export default EStatisticsBlock