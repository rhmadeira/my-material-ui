import { useCallback, useRef } from "react";

export default function useDebounce(delay = 1000, notDelayFirst = true) {
  const debouncing = useRef<NodeJS.Timeout>();
  const isFirstTime = useRef(notDelayFirst);

  const debounce = useCallback(
    (func: () => void) => {
      if (isFirstTime.current) {
        isFirstTime.current = false;
        func();
        return;
      } else {
        if (debouncing.current) {
          clearTimeout(debouncing.current);
        }
      }
      debouncing.current = setTimeout(() => {
        func();
      }, delay);
    },
    [delay]
  );

  return { debounce };
}
