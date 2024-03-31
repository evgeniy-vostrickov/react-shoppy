import React, { useCallback } from 'react'
import SButton from '../../../shared/ui/Button/Button'

const ECardButtonDownload = () => {
  const ecommerceDownload = useCallback(() => {
    setTimeout(() => console.log("Ecommerce been download!"), 500)
  }, [])

  return (
    <SButton classButton='mt-8' textButton="Download" onClick={ecommerceDownload} />
  )
}

export default ECardButtonDownload