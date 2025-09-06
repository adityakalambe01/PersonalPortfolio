"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Laptop } from "lucide-react";

import {AnimatePresence, motion} from "framer-motion";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="transition-colors duration-300 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100"
				>
					<AnimatePresence mode="wait" initial={false}>
						<motion.div
							key={theme}
							initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
							animate={{ rotate: 0, opacity: 1, scale: 1 }}
							exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
							transition={{ duration: 0.3 }}
						>
							{theme === "light" && <Sun className="h-5 w-5 text-yellow-500" />}
							{theme === "dark" && <Moon className="h-5 w-5 text-indigo-400" />}
							{theme === "system" && <Laptop className="h-5 w-5 text-gray-500" />}
						</motion.div>
					</AnimatePresence>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>
					<Sun className="mr-2 h-4 w-4 text-yellow-500" /> Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					<Moon className="mr-2 h-4 w-4 text-indigo-400" /> Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					<Laptop className="mr-2 h-4 w-4 text-gray-500" /> System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}