// Custom hook para gerenciar localStorage
import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  // Estado para armazenar o valor
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Tenta pegar do localStorage
      const item = window.localStorage.getItem(key);
      // Retorna o valor parseado ou o valor inicial
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Se erro, retorna valor inicial
      console.error(`Erro ao ler localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Função para definir valor
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Permite que valor seja uma função para ser consistente com useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Salva no estado
      setStoredValue(valueToStore);
      // Salva no localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Erro ao salvar no localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
