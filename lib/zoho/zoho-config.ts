export const ZOHO_CONFIG = {
  clientId: process.env.NEXT_PUBLIC_ZOHO_CLIENT_ID || "demo_client_id",
  clientSecret: process.env.NEXT_PUBLIC_ZOHO_CLIENT_SECRET || "demo_client_secret",
  redirectUri: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/auth/zoho/callback`,
  scope: "ZohoBooks.fullaccess.all",
};