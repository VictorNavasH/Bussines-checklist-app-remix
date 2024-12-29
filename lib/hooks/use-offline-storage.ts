"use client";

import { useState, useEffect } from 'react';
import { useLocalStorage } from './use-local-storage';

export function useOfflineStorage<T>(key: string, initialValue: T) {
  const [onlineValue, setOnlineValue] = useState<T>(initialValue);
  const [offlineValue, setOfflineValue] = useLocalStorage<T>(key, initialValue);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);
    
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const setValue = (value: T | ((val: T) => T)) => {
    if (isOnline) {
      const newValue = value instanceof Function ? value(onlineValue) : value;
      setOnlineValue(newValue);
      setOfflineValue(newValue);
    } else {
      setOfflineValue(value);
    }
  };

  return [isOnline ? onlineValue : offlineValue, setValue, isOnline] as const;
}