import { useCallback } from 'react';

type ReturnUseCombinedRef = ((element: HTMLElement) => void)

export function useCombinedRef(...refs: any[]): ReturnUseCombinedRef {
    const combinedRef = useCallback((element: HTMLElement) => {
        refs.forEach(ref => {
            if (!ref) return
            if (typeof ref === 'function') {
                ref(element)
            } else {
                ref.current = element
            }
        })
    }, [refs])

    return combinedRef
}