import React, { memo } from 'react'
import { Button } from 'antd'
import { ISButton } from './types/ISButton'
import clsx from 'clsx'

const SButton: React.FC<ISButton> = memo(({ textButton, onClick, classButton }) => (
    <Button onClick={onClick} className={clsx('text-white bg-blue-800', classButton)}>{textButton}</Button>
))

export default SButton