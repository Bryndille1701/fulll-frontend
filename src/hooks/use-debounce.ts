import { useEffect, useState } from 'react';

// useDebounce hook
const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up timeout
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  // Return debounced value
  return debouncedValue;
};

export default useDebounce;
