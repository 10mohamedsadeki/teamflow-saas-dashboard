import { NavLink } from "react-router";
import { UserButton } from "@clerk/react";
import { X } from "lucide-react";
import {dashboardLinks} from "../data/dashboardLinks";

const AppSidebar = ({ sidebarOpen, handleSidebar }) => {
  return (
    <aside
      className={`h-screen w-70 flex-col border-r border-zinc-200 bg-white px-4 py-5 shadow-sm
  ${sidebarOpen ? "fixed left-0 top-0 z-50 flex" : "hidden"}
  lg:static lg:flex`}
    >
      <div className="mb-8 flex items-center gap-3 px-2 border-b pb-5 border-zinc-200">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-lg font-bold text-white">
          T
        </div>
        <div>
          <h1 className="text-lg font-bold text-zinc-900">Team Flow</h1>
          <p className="text-sm text-zinc-500">Manage your work</p>
        </div>
        {sidebarOpen ? (
          <X className="ml-6" size={22} onClick={() => handleSidebar()} />
        ) : (
          ""
        )}
      </div>

      <nav className="flex flex-1 flex-col gap-2">
        {dashboardLinks.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/dashboard"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-zinc-900 text-white shadow-md"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                }`
              }
            >
              <Icon size={20} />
              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-6 border-t border-zinc-200 pt-5">
        <div className="flex items-center justify-between rounded-2xl bg-zinc-100 p-3">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900">My Account</h3>

            <p className="text-xs text-zinc-500">Manage profile</p>
          </div>

          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </div>
    </aside>
  );
};

export default AppSidebar;
