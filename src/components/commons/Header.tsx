import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

type MenuItem = {
  title?: string;
  path: string;
  label?: string;
  subMenu?: MenuItem[];
};

const menuItems: MenuItem[] = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  {
    title: "Services",
    path: "/services",
    subMenu: [
      { path: "/services/web-design", label: "Web Design" },
      { path: "/services/seo", label: "SEO" },
      { path: "/services/marketing", label: "Marketing" },
    ],
  },
  {
    title: "Shop",
    path: "/shop",
    subMenu: [
      { path: "/shop/men", label: "Men's Fashion" },
      { path: "/shop/women", label: "Women's Fashion" },
    ],
  },
  {
    title: "Blog",
    path: "/blog",
    subMenu: [
      { path: "/blog/tech", label: "Tech" },
      { path: "/blog/lifestyle", label: "Lifestyle" },
      { path: "/blog/travel", label: "Travel" },
    ],
  },
  { title: "Contact", path: "/contact" },
];

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", sidebarOpen);
  }, [sidebarOpen]);

  return (
    <header className="bg-white shadow-md top-0 w-full">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center md:justify-center z-10">
        <Link
          to="/"
          className="text-xl font-bold text-gray-800 flex items-center"
        >
          <img
            src="/logo.png"
            alt="logo"
            className="h-12 sm:h-16 lg:h-20 w-auto max-w-[200px] object-contain"
          />
        </Link>

        <Button
          className="md:hidden text-gray-800 cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={28} />
        </Button>

        <NavigationMenu.Root className="hidden md:flex md:justify-center font-medium w-full">
          <NavigationMenu.List className="flex gap-2 lg:gap-6 items-center">
            {menuItems.map((item) => (
              <NavigationMenu.Item key={item.path} className="relative group">
                <NavigationMenu.Trigger className="px-4 py-2 text-[#222a63] hover:text-blue-500 flex items-center cursor-pointer">
                  {item.title}
                  {item.subMenu && (
                    <ChevronDown className="ml-2 size-4 transition-transform group-hover:rotate-180" />
                  )}
                </NavigationMenu.Trigger>

                {item.subMenu && (
                  <NavigationMenu.Content className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-white shadow-lg rounded-lg w-48 max-w-xs border border-[#222a63] scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
                    <ul className="py-2">
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.path}>
                          <Link
                            to={subItem.path}
                            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenu.Content>
                )}
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden overflow-y-auto z-40`}
        >
          <div className="flex justify-between items-center py-3 border-b">
            <img src="/logo.png" alt="logo" className="w-auto h-16" />
            <Button
              className="text-gray-600 cursor-pointer border mr-2"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={28} />
            </Button>
          </div>

          <nav className="p-4">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <div className="flex justify-between items-center">
                    <Link
                      to={item.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded w-full"
                      onClick={() => setSidebarOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.subMenu && (
                      <Button
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer"
                        onClick={() =>
                          setOpenSubMenu(
                            openSubMenu === item.path ? null : item.path
                          )
                        }
                      >
                        <Plus
                          className={`transition-transform${
                            openSubMenu === item.path ? "rotate-45" : ""
                          }`}
                          size={18}
                        />
                      </Button>
                    )}
                  </div>
                  {item.subMenu && openSubMenu === item.path && (
                    <ul className="pl-4 mt-2 space-y-2">
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.path}>
                          <Link
                            to={subItem.path}
                            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                            onClick={() => setSidebarOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 md:hidden z-30 pointer-events-auto"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
      </div>
    </header>
  );
}
