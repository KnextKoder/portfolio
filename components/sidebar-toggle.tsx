"use client"
import { PanelRightOpen } from "lucide-react";
import { useSidebar } from "./sidebar-provider";


export function SidebarToggle() {
    const { toggle } = useSidebar()
    return(
        <button className="fixed lg:hidden bottom-4 right-4 h-8 w-8 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-50" onClick={toggle}>
        <PanelRightOpen className="h-4 w-4 text-primary" />
      </button>
    )
}