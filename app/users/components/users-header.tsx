"use client";

import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";

export function UsersHeader() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">Users</h1>
        <p className="text-muted-foreground">
          Manage user accounts and permissions
        </p>
      </div>
      <Button onClick={() => router.push("/users/new")}>
        <UserPlus className="mr-2 h-4 w-4" />
        Add User
      </Button>
    </div>
  );
}