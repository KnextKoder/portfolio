"use client"
import { PanelRightOpen } from "lucide-react";
import { useSidebar } from "./sidebar-provider";


export function SidebarToggle() {
    const { toggle } = useSidebar()
    return(
        <button className="fixed lg:hidden bottom-4 right-4 h-12 w-12 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-50" onClick={toggle}>
        <PanelRightOpen className="h-6 w-6 text-primary" />
      </button>
    )
}