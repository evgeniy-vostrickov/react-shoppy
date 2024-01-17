import { RefObject, useEffect } from "react";
import { useLatest } from "./use-latest";

// Обработка клика вне элемента
export function useOutsideClick(elementRef: RefObject<any>, handler: any, attached = true) {
    const latestHandler = useLatest(handler);

    useEffect(() => {
        if (!attached) return;

        const handleClick = (event: Event) => {
            if (!elementRef.current) return;

            if (!elementRef.current.contains(event.target)) {
                latestHandler.current();
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [elementRef, latestHandler, attached]);
}