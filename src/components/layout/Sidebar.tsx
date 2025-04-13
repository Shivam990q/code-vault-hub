
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Archive,
  BarChart2,
  FileCode,
  Grid,
  Home,
  Plus,
  Settings,
  Tag,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  className?: string;
}

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

function SidebarLink({ to, icon, label }: SidebarLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
        isActive
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

export default function Sidebar({ isOpen, className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r bg-background transition-transform lg:static",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        className
      )}
    >
      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-3 py-2">
          <Button className="w-full justify-start gap-2" size="sm">
            <Plus className="h-4 w-4" />
            <span>New Project</span>
          </Button>
          
          <div className="mt-8 space-y-1">
            <SidebarLink
              to="/dashboard"
              icon={<Home className="h-4 w-4" />}
              label="Dashboard"
            />
            <SidebarLink
              to="/projects"
              icon={<FileCode className="h-4 w-4" />}
              label="My Projects"
            />
            <SidebarLink
              to="/templates"
              icon={<Grid className="h-4 w-4" />}
              label="Templates"
            />
            <SidebarLink
              to="/archive"
              icon={<Archive className="h-4 w-4" />}
              label="Archive"
            />
          </div>

          <div className="mt-8 space-y-1">
            <div className="px-3 text-xs font-semibold text-muted-foreground">
              Analytics
            </div>
            <SidebarLink
              to="/analytics"
              icon={<BarChart2 className="h-4 w-4" />}
              label="Statistics"
            />
            <SidebarLink
              to="/tags"
              icon={<Tag className="h-4 w-4" />}
              label="Tags"
            />
          </div>

          <div className="mt-8 space-y-1">
            <div className="px-3 text-xs font-semibold text-muted-foreground">
              Account
            </div>
            <SidebarLink
              to="/profile"
              icon={<User className="h-4 w-4" />}
              label="Profile"
            />
            <SidebarLink
              to="/settings"
              icon={<Settings className="h-4 w-4" />}
              label="Settings"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
