import { useCallback, useState } from "react"
import { useIsMounted } from "./use-isMounted"

// Усовершенственный setState, который обновляет его, только в случае если компонент вмонтирован
function useSafeState(initalValue: any) {
    const [state, setState] = useState(initalValue)
    const isMounted = useIsMounted()

    const updateState = useCallback(
        (newValue: any) => {
            if (isMounted.current) {
                setState(newValue)
            }
        },
        [isMounted]
    );

    return [state, updateState]
}