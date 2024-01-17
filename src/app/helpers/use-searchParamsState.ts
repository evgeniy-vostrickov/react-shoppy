import { useState, useCallback } from 'react'
import { useSearchParams } from "react-router-dom";
import { useLatest } from "./use-latest";

type IUseSearchParamsState = [string | null, (newValue: string | ((prev: string) => string), newState: Object) => void]

const defaultDeserialize = (v: string | null) => v;
const defaultSerialize = String;

export function useSearchParamsState(name: string, serialize = defaultSerialize, deserialize = defaultDeserialize): IUseSearchParamsState {
    const [searchParams, setSearchParams] = useSearchParams()
    const [value, setValue] = useState(() => {
        const initialValue = deserialize(searchParams.get(name))
        return initialValue;
    })
    const latestValue = useLatest(value)

    const updateValue = useCallback((newValue: string | ((prev: string) => string), newState: Object) => {
        const actualNewValue = typeof newValue === "function" ? newValue(latestValue.current) : newValue
        setValue(actualNewValue)
        searchParams.set(name, serialize(actualNewValue))
        setSearchParams(searchParams, { state: newState })
    }, [name, serialize])

    return [value, updateValue];
}