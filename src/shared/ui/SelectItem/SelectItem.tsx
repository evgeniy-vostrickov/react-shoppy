import React from 'react'
import { ISelectItem } from '../../types/ISelectItem'
import { Select } from 'antd'
import { EventType } from '../../../widgets/api/store/models/MCalendarSlice'

const SelectItem = <T,>({defaultValue, onChange, options}: ISelectItem<T>) => {
    return (
        <Select
            defaultValue={defaultValue}
            onChange={onChange}
            style={{ width: 120 }}
            options={[...options]}
        />
    )
}

export default SelectItem