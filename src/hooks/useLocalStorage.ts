import { useState } from 'react';

const useLocalStorage = (key: string = '', initialValue: any = '') => {
  const [state, setState] = useState<any>(() => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setLocalStorageState = (newState: any) => {
    try {
      let newValue;
      if (typeof newState === 'function') newValue = newState();
      else newValue = newState;

      localStorage.setItem(key, JSON.stringify(newValue));
      setState(newValue);
    } catch (error) {
      console.log(`Can not set the new value for ${key} in the storage`);
    }
  };

  return [state, setLocalStorageState];
};

export default useLocalStorage;
