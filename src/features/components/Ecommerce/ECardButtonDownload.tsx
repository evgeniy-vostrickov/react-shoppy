import React from 'react'
import SButton from '../../../shared/ui/Button/Button'

const EcommerceDownload = () => {
    setTimeout(() => console.log("Ecommerce been download!"), 500)
}

const ECardButtonDownload = () => {
  return (
    <SButton classButton='mt-8' textButton="Download" onClick={EcommerceDownload} />
  )
}

export default ECardButtonDownload