import { useState } from "react";

// An upgraded version of useState, with the same interface but the added functionality of
//reading to / writing from localStorage

export const useLocalStorage = (key, initialValue) => {
  const [value, setStoreValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    }
    return initialValue;
  });

  const setValue = (newValue) => {
    setStoreValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };
  return [value, setValue];
};
