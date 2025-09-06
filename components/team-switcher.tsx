"use client"

import * as React from "react"
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar"
import {ModeToggle} from "@/components/theme";
interface MainLogoProps {
	name: string,
	logo: React.ElementType,
	role: string,
}

export function TeamSwitcher({name, logo, role}: MainLogoProps) {
	const { isMobile } = useSidebar()
	const [activeUser, setActiveUser] = React.useState({name, logo, role})

	if (!activeUser) {
		return null
	}

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<SidebarMenuButton
					size="lg"
					className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
				>
					<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
						<activeUser.logo  className="w-4"/>
					</div>
					<div className="grid flex-1 text-left text-sm leading-tight">
						<span className="truncate font-medium">{activeUser.name}</span>
						{
							activeUser.role &&
                            <span className="truncate text-xs">{activeUser.role}</span>
						}
					</div>
					<ModeToggle></ModeToggle>
				</SidebarMenuButton>
			</SidebarMenuItem>
		</SidebarMenu>
	)
}
