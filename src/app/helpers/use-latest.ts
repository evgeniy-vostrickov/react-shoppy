import { useLayoutEffect, useRef } from "react";

// Создаем Ref и сохраняем значение между рендарами
export function useLatest(value: any) {
  const valueRef = useRef(value)
  useLayoutEffect(() => {
    valueRef.current = value
  }, [value])

  return valueRef
}