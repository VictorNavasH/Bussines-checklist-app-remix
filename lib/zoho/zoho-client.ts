"use client";

import { z } from "zod";

const zohoConfigSchema = z.object({
  clientId: z.string(),
  clientSecret: z.string(),
  redirectUri: z.string(),
  scope: z.string(),
});

export type ZohoConfig = z.infer<typeof zohoConfigSchema>;

export class ZohoClient {
  private config: ZohoConfig;
  private accessToken?: string;

  constructor(config: ZohoConfig) {
    this.config = zohoConfigSchema.parse(config);
  }

  async init(code?: string) {
    if (code) {
      await this.getAccessToken(code);
    }
  }

  private async getAccessToken(code: string) {
    const response = await fetch("https://accounts.zoho.com/oauth/v2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        code,
        client_id: this.config.clientId,
        client_secret: this.config.clientSecret,
        redirect_uri: this.config.redirectUri,
        grant_type: "authorization_code",
      }),
    });

    const data = await response.json();
    this.accessToken = data.access_token;
    return this.accessToken;
  }

  async getChartOfAccounts() {
    if (!this.accessToken) throw new Error("Not authenticated");

    const response = await fetch(
      "https://books.zoho.com/api/v3/chartofaccounts",
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    return response.json();
  }

  async createInvoice(invoice: any) {
    if (!this.accessToken) throw new Error("Not authenticated");

    const response = await fetch("https://books.zoho.com/api/v3/invoices", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(invoice),
    });

    return response.json();
  }

  async syncFinancials(startDate: string, endDate: string) {
    if (!this.accessToken) throw new Error("Not authenticated");

    const [accounts, invoices, expenses] = await Promise.all([
      this.getChartOfAccounts(),
      this.getInvoices(startDate, endDate),
      this.getExpenses(startDate, endDate),
    ]);

    return {
      accounts,
      invoices,
      expenses,
    };
  }

  private async getInvoices(startDate: string, endDate: string) {
    const response = await fetch(
      `https://books.zoho.com/api/v3/invoices?date_start=${startDate}&date_end=${endDate}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    return response.json();
  }

  private async getExpenses(startDate: string, endDate: string) {
    const response = await fetch(
      `https://books.zoho.com/api/v3/expenses?date_start=${startDate}&date_end=${endDate}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    return response.json();
  }
}