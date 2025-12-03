"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Landmark,
  ArrowRightLeft,
  Wallet,
  Receipt,
  Settings,
  LogOut,
  UserCircle,
  LayoutDashboard,
} from "lucide-react";
import { BcaLogo } from "@/components/bca-logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar');

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/accounts", icon: Landmark, label: "Accounts" },
  { href: "/dashboard/transfer", icon: ArrowRightLeft, label: "Transfer" },
  { href: "/dashboard/payment", icon: Receipt, label: "Bill Pay" },
  { href: "/dashboard/topup", icon: Wallet, label: "Top Up" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
];

const pageTitles: { [key: string]: string } = {
  "/dashboard": "Dashboard",
  "/dashboard/accounts": "Account Management",
  "/dashboard/transfer": "Fund Transfer",
  "/dashboard/payment": "Bill Payment",
  "/dashboard/topup": "Top Up",
  "/dashboard/settings": "Settings",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar side="left" variant="sidebar" collapsible="icon">
        <SidebarHeader>
          <BcaLogo className="h-8 w-auto fill-sidebar-foreground group-data-[collapsible=icon]:hidden" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <Link href={item.href} passHref>
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    tooltip={{ children: item.label, side: "right", align: 'center' }}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="group-data-[collapsible=icon]:p-0">
          <Link href="/login" passHref>
             <SidebarMenuButton tooltip={{ children: 'Log Out', side: "right", align: 'center' }}>
              <LogOut />
              <span>Log Out</span>
            </SidebarMenuButton>
          </Link>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="md:hidden" />
            <h1 className="text-xl font-semibold">{pageTitles[pathname] || "myBCA"}</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  {userAvatar && (
                    <Image
                      src={userAvatar.imageUrl}
                      alt="User Avatar"
                      width={36}
                      height={36}
                      className="rounded-full"
                      data-ai-hint={userAvatar.imageHint}
                    />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserCircle className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <Link href="/login" passHref>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6">
            {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
