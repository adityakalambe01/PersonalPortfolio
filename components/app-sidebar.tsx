"use client"

import * as React from "react"
import {
	BookOpen,
	Bot,
	GalleryVerticalEnd, Info,
	Settings2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	userInfo:{
		logo: GalleryVerticalEnd,
		name: "Aditya Kalambe",
		role: "Full-Stack Developer",
	},
	navMain: [
		{
			title: "About",
			url: "#",
			icon: Info,
			isActive: true,
			items: [
				{
					title: "Myself",
					url: "#",
				},
				{
					title: "What I do",
					url: "#",
				},
				{
					title: "Education",
					url: "#",
				},
				{
					title: "Work Experience",
					url: "#",
				},
			],
		},
		{
			title: "Projects",
			url: "#",
			icon: Bot,
			items: [
				{
					title: "Project 1",
					url: "#",
				},
				{
					title: "Project 2",
					url: "#",
				},
				{
					title: "Project 3",
					url: "#",
				},
			],
		},
		{
			title: "Skills",
			url: "#",
			icon: BookOpen,
			items: [
				{
					title: "Frontend",
					url: "#",
				},
				{
					title: "Backend",
					url: "#",
				},
				{
					title: "Databases",
					url: "#",
				},
				{
					title: "Version Control",
					url: "#",
				},
				{
					title: "Editors",
					url: "#",
				},
				{
					title: "Other",
					url: "#",
				},
			],
		},
		{
			title: "Contact",
			url: "#",
			icon: Settings2,
			items: [
				{
					title: "General",
					url: "#",
				},
				{
					title: "Team",
					url: "#",
				},
				{
					title: "Billing",
					url: "#",
				},
				{
					title: "Limits",
					url: "#",
				},
			],
		},
	],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<TeamSwitcher role={data.userInfo.role} logo={data.userInfo.logo} name={data.userInfo.name} />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}
