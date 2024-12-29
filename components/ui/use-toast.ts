"use client";

import * as React from "react";

type ToastProps = {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  type?: "default" | "success" | "error" | "warning";
};

export function useToast() {
  const [toasts, setToasts] = React.useState<ToastProps[]>([]);

  const toast = React.useCallback(
    ({ title, description, action, type = "default" }: ToastProps) => {
      const id = Math.random().toString(36).substring(2);
      setToasts((prev) => [...prev, { title, description, action, type }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast !== id));
      }, 5000);
    },
    []
  );

  return { toast, toasts };
}