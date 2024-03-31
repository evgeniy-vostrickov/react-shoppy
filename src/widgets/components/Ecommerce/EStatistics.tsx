import React from 'react'
import ECardDownload from './ECardDownload'
import EStatisticsBlock from '../../../entites/components/Ecommerce/EStatisticsBlock'

const EStatistics = () => {
  return (
    <div className="flex justify-around xl:justify-between items-center flex-wrap gap-2.5">
      <ECardDownload />
      <EStatisticsBlock />
    </div>
  )
}

export default EStatistics