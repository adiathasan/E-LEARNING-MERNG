import { useState, useEffect } from "react";

const PREFIX = "sandbox-";

const useLocalStorage = (key, initValue) => {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const json = localStorage.getItem(prefixedKey);
    if (json) return JSON.parse(localStorage.getItem(prefixedKey));

    if (typeof initValue === "function") {
      return initValue();
    } else {
      return initValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
