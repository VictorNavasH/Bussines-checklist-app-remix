"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  ClipboardCheck,
  Settings,
  Users,
  BarChart,
} from "lucide-react";

const menuItems = [
  {
    title: "Panel",
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
    title: "Config",
    icon: Settings,
    href: "/settings",
  },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
      <div className="flex items-center justify-around h-16">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center w-full h-full space-y-1 text-xs",
              pathname === item.href
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}