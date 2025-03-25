import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MobileSidebar } from "./MobileSidebar";


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
      {
        path: "/services/Grooming",
        label: "Grooming",
        subMenu: [
          { path: "/services/Haircut", label: "Haircut" },
          { path: "/services/Bathing", label: "Bathing" },
        ],
      },
      {
        path: "/services/PetCare",
        label: "Pet Care",
        subMenu: [
          { path: "/services/Massage", label: "Massage" },
          { path: "/services/FleaTreatment", label: "Flea Treatment" },
        ],
      },
      { path: "/services/HealthCheck", label: "Health Check" },
      { path: "/services/Boarding", label: "Boarding" },
      { path: "/services/Training", label: "Training" },
    ],
  },
  {
    title: "Shop",
    path: "/shop",
    subMenu: [{ path: "/shop/products", label: "All Products" }],
  },
  {
    title: "Blog",
    path: "/blog",
    subMenu: [
      { path: "/blog/experience", label: "Share Experience" },
      { path: "/blog/service", label: "Home Service" },
      { path: "/blog/entertainment", label: "Entertainment Corner" },
    ],
  },
  { title: "Contact", path: "/contact" },
];

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", sidebarOpen);
  }, [sidebarOpen]);

  const handleMouseEnter = (path: string) => {
    setHoveredItem(path);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleSubMenuEnter = (path: string) => {
    setActiveSubMenu(path);
  };

  const handleSubMenuLeave = () => {
    setActiveSubMenu(null);
  };

  const renderSubMenu = (subMenu?: MenuItem[]) => {
    if (!subMenu) return null;
    return (
      <ul className="py-2 bg-white shadow-lg rounded-md border border-gray-200">
        {subMenu.map((item) => (
          <li
            key={item.path}
            className="relative group"
            onMouseEnter={() => handleSubMenuEnter(item.path)}
            onMouseLeave={handleSubMenuLeave}
          >
            <Link
              to={item.path}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {item.label}
            </Link>
            {item.subMenu && activeSubMenu === item.path && (
              <ul className="absolute left-full top-0 ml-2 bg-white shadow-lg rounded-md border border-gray-200 z-20">
                {item.subMenu.map((subItem) => (
                  <li key={subItem.path}>
                    <Link
                      to={subItem.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 whitespace-nowrap"
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
    );
  };

  return (
    <header className="bg-white shadow-md top-0 w-full z-20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          <img
            src="/logo.png"
            alt="logo"
            className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
          />
        </Link>

        {/* Nút mở sidebar trên mobile */}
        <Button
          className="md:hidden text-gray-800"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={28} />
        </Button>

        {/* Menu Desktop */}
        <NavigationMenu.Root className="hidden md:flex md:justify-center font-medium w-full">
          <NavigationMenu.List className="flex gap-4 items-center">
            {menuItems.map((item) => (
              <NavigationMenu.Item
                key={item.path}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.path)}
                onMouseLeave={handleMouseLeave}
              >
                <NavigationMenu.Trigger className="px-4 py-2 text-[#222a63] hover:text-blue-500 flex items-center">
                  {item.title}
                  {item.subMenu && (
                    <ChevronDown className="ml-2 size-4 transition-transform group-hover:rotate-180" />
                  )}
                </NavigationMenu.Trigger>
                {item.subMenu && hoveredItem === item.path && (
                  <NavigationMenu.Content className="absolute left-0 top-full bg-white shadow-lg rounded-md w-56 border border-gray-200 opacity-100 transition-opacity duration-300 z-10">
                    {renderSubMenu(item.subMenu)}
                  </NavigationMenu.Content>
                )}
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>


      <MobileSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        menuItems={menuItems}
      />

    </header>
  );
}
