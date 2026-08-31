import { LayoutDashboard, Users, Wallet, ArrowLeftRight, Send } from'lucide-react'
import NavItem from "./NavItem";



function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-slate-200 bg-white">
      <div className="border-b border-slate-200 px-6 py-5">
        <h1 className="text-xl font-bold text-slate-900">Nexa Bank</h1>
      </div>
       <nav className="px-6 py-6">
      <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">MAIN</p>

      <div>
      <NavItem
        label="Dashboard"
        icon={LayoutDashboard}
        isActive = {true}
        />

        <NavItem
        label="Customers"
        icon={Users}
         isActive = {false}
        />

        <NavItem
        label="Accounts"
        icon={Wallet}
         isActive = {false}
        />

        <NavItem
        label="Transactions"
        icon={ArrowLeftRight }
         isActive = {false}
        />

        <NavItem
        label="Transfers"
        icon={ Send }
         isActive = {false}
        />

    </div>

    </nav>


    </aside>


  )

}

export default Sidebar;
