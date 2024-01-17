import React, { } from 'react'
import { BsFillBoxSeamFill, BsPeopleFill } from 'react-icons/bs'
import { VscGraph } from 'react-icons/vsc'
import { RxUpdate } from 'react-icons/rx'
import ECardDownload from '../../../widgets/components/Ecommerce/ECardDownload'
import ECardInfo from '../../../entites/components/Ecommerce/EcommerceCard/ECardInfo'
import ECardRevenueUpdates from '../../../entites/components/Ecommerce/EcommerceCard/ECardRevenueUpdates'
import DemoPie from '../../../shared/ui/RingGraph/RingGraph'
import ECardYearlySales from '../../../entites/components/Ecommerce/EcommerceCard/ECardYearlySales'
import ECardEarnings from '../../../entites/components/Ecommerce/EcommerceCard/ECardEarnings'
import ESelectTransction from '../../../features/components/Ecommerce/ESelectTransction'

const Ecommerce = () => {
    return(
        <>
            <div className="flex justify-around xl:justify-between items-center flex-wrap gap-2.5">
                <ECardDownload />
                <ECardInfo numberValue={39354} decimalPlaces={0} colorIcon='#35aabb' backgroundColorIcon='#e3f7fb' ComponentIcon={<BsPeopleFill />} textInscription='Customers' rise={false} riseValue='-4%' />
                <ECardInfo numberValue={39354} decimalPlaces={0} colorIcon='#ffe48b' backgroundColorIcon='#fcc40d' ComponentIcon={<BsFillBoxSeamFill />} textInscription='Products' rise={true} riseValue='+5%' />
                <ECardInfo numberValue={39354} decimalPlaces={0} colorIcon='#b49086' backgroundColorIcon='#fcf4e6' ComponentIcon={<VscGraph />} textInscription='Sales' rise={true} riseValue='+15%' />
                <ECardInfo numberValue={39354} decimalPlaces={0} colorIcon='#66b3a5' backgroundColorIcon='#ecf7f2' ComponentIcon={<RxUpdate />} textInscription='Refunds' rise={false} riseValue='-10%' />
            </div>
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