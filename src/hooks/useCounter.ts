import { useState } from 'react'

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter(counter + value);
  }

  const decrement = (value = 1) => {
    let result = counter - value;
    if (result <= 0) {
      result = 0;
    }
    setCounter(result);
  }

  const reset = () => {
    setCounter(initialValue);
  }

  return {
    counter,
    increment,
    decrement,
    reset,
  }

}