"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ZOHO_CONFIG } from "@/lib/zoho/zoho-config";

export function ZohoConnectButton() {
  const { toast } = useToast();

  const handleConnect = () => {
    const authUrl = `https://accounts.zoho.com/oauth/v2/auth?response_type=code&client_id=${
      ZOHO_CONFIG.clientId
    }&scope=${encodeURIComponent(
      ZOHO_CONFIG.scope
    )}&redirect_uri=${encodeURIComponent(ZOHO_CONFIG.redirectUri)}`;

    // En modo desarrollo, mostramos un mensaje
    if (process.env.NODE_ENV === "development") {
      toast({
        title: "Modo Desarrollo",
        description: "La integración con Zoho está simulada en desarrollo",
        type: "info",
      });
      return;
    }

    window.location.href = authUrl;
  };

  return (
    <Button onClick={handleConnect} variant="outline" className="w-full">
      Conectar con Zoho Books
    </Button>
  );
}