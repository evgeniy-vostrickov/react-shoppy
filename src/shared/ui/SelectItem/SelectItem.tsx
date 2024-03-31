import React, { memo } from 'react'
import { ISelectItem } from './types/ISelectItem'
import { Select } from 'antd'

const SelectItem = memo(<T,>({defaultValue, onChange, options}: ISelectItem<T>) => {
    return (
        <Select
            defaultValue={defaultValue}
            onChange={onChange}
            style={{ width: 120 }}
            options={[...options]}
        />
    )
})

export default SelectItem