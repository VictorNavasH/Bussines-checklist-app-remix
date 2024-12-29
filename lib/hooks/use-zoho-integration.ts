import { useState, useCallback } from 'react';
import { ZohoClient } from '../zoho/zoho-client';

export function useZohoIntegration(config: any) {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connect = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const client = new ZohoClient(config);
      await client.init();
      setIsConnected(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al conectar con Zoho');
    } finally {
      setIsLoading(false);
    }
  }, [config]);

  const disconnect = useCallback(() => {
    setIsConnected(false);
  }, []);

  return {
    isConnected,
    isLoading,
    error,
    connect,
    disconnect,
  };
}