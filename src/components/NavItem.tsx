import type {LucideIcon } from "lucide-react"


type NavItemProps = {
  label:string
  icon:LucideIcon
  isActive:boolean
}

function NavItem({label, icon: Icon, isActive}: NavItemProps) {
  return(
    <button className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${
      isActive
      ? 'bg-slate-900 text-white'
      : 'text-slate-600 hover:bg-slate-100'}`} >
        <Icon size={18} />
        {label}
    </button>
  )
}

export default NavItem
