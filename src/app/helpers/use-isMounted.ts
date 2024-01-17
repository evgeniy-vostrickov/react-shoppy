import { useRef, useEffect } from 'react'

// Проверка встроен компонент или нет
export function useIsMounted() {
    const isMounted = useRef(false)

    useEffect(() => {
        isMounted.current = true
        return () => {
            isMounted.current = false
        };
    }, []);

    return isMounted
}