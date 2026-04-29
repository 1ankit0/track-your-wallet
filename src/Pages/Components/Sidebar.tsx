"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "../../components/ui/sidebar"

import { Home, Wallet, PieChart, Settings, LogOut } from "lucide-react"
import { Button } from "../../components/ui/button"

const AppSidebar = ()=> {
  return (
    <Sidebar>
      {/* HEADER */}
      <SidebarHeader>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">ExpenseTrack</h1>
          <p className="text-sm text-muted-foreground">Simple budgeting</p>
        </div>
      </SidebarHeader>

      {/* MENU */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Home className="mr-2 h-4 w-4" />
                  Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Wallet className="mr-2 h-4 w-4" />
                  Transactions
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton>
                  <PieChart className="mr-2 h-4 w-4" />
                  Analytics
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            john@email.com
          </p>

          <Button variant="outline" className="w-full">
            <LogOut className="mr-2 h-4 w-4" />
            Sign out
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar