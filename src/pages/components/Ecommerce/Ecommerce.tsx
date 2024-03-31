import React from 'react'
import ECardRevenueUpdates from '../../../entites/components/Ecommerce/EcommerceCard/ECardRevenueUpdates'
import ECardYearlySales from '../../../entites/components/Ecommerce/EcommerceCard/ECardYearlySales'
import ECardEarnings from '../../../entites/components/Ecommerce/EcommerceCard/ECardEarnings'
import ESelectTransction from '../../../features/components/Ecommerce/ESelectTransction'
import EStatistics from '../../../widgets/components/Ecommerce/EStatistics'

const Ecommerce = () => {
    return(
        <>
            <EStatistics />
            <ECardRevenueUpdates />
            <div className='flex gap-5'>
                <ECardYearlySales />
                <ECardEarnings />
                <ESelectTransction />
            </div>
        </>
    )
}

export default Ecommerce