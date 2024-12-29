"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  ClipboardCheck,
  Settings,
  Users,
  BarChart,
  Menu,
} from "lucide-react";
import { Button } from "./ui/button";

const menuItems = [
  {
    title: "Panel Principal",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Checklists",
    icon: ClipboardCheck,
    href: "/checklists",
  },
  {
    title: "Informes",
    icon: BarChart,
    href: "/reports",
  },
  {
    title: "Usuarios",
    icon: Users,
    href: "/users",
  },
  {
    title: "Configuración",
    icon: Settings,
    href: "/settings",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "border-r bg-background transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-16 items-center justify-between px-4">
        {!collapsed && (
          <span className="text-lg font-semibold">Control Restaurante</span>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      <nav className="space-y-2 px-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm transition-colors",
              pathname === item.href
                ? "bg-secondary text-secondary-foreground"
                : "hover:bg-secondary/50",
              collapsed && "justify-center"
            )}
          >
            <item.icon className="h-5 w-5" />
            {!collapsed && <span>{item.title}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
}