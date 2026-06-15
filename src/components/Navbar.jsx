import { Menu, Bell } from "lucide-react";
import { UserButton } from "@clerk/react";
import { useLocation } from "react-router";
import { dashboardLinks } from "@/data/dashboardLinks";

const Navbar = ({ handleSidebar }) => {
  let location = useLocation();
  const Icon =
    dashboardLinks.find((link) => link.path === location.pathname)?.icon ||
    dashboardLinks[0].icon;
  return (
    <>
      <header className="sticky top-0 z-40 rounded-lg bg-zinc-100/50 backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleSidebar()}
              className="rounded-lg p-2 transition hover:bg-zinc-200 lg:hidden"
            >
              <Menu size={22} />
            </button>

            <div className="hidden items-center gap-2 lg:flex">
              <Icon size={24} className="text-black" />
              <h1 className="text-xl font-semibold text-black">
                {dashboardLinks.find((link) => link.path === location.pathname)
                  ?.name || "Dashboard"}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
           

            <button className="rounded-xl bg-zinc-100 p-2.5 transition hover:bg-zinc-800 hover:text-white">
              <Bell size={18} />
            </button>

            <div className="pt-2">
              <UserButton afterSignOutUrl="/sign-in" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
