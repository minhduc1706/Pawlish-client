import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
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
      {
        path: "/services/PetSpaServices",
        label: "Pet Spa Services",
        subMenu: [
          { path: "/services/Combo1", label: "Combo 1 – Hygiene bath" },
          {
            path: "/services/Combo3",
            label: "Combo 3 - Bath, grooming and hair trimming",
          },
          { path: "/services/Combo4", label: "Combo 4 - Shaving and bathing" },
        ],
      },
      {
        path: "/services/PetHomeCare",
        label: "Pet Service at Home: 24/7 Convenient Solution for You",
        subMenu: [
          { path: "/services/PetBathPage", label: "Bathe your pet at home" },
          {
            path: "/services/CutPetHairPage",
            label: "Pet Grooming At Home",
          },
        ],
      },

      {
        path: "/services/PromotionServicePage",
        label: "Promotion Pet Service",
      },
      {
        path: "/services/PetHotelPage",
        label: "Pet Hotel",
      },
      {
        path: "/services/TakeDogWalkPage",
        label: "Dog Walkers",
      },
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

  // ✅ Hiển thị submenu cấp 1 khi hover
  const handleMouseEnter = (path: string) => {
    setHoveredItem(path);
  };

  // ✅ Đóng submenu cấp 1 khi rời chuột
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  // ✅ Hiển thị submenu cấp 2 khi hover
  const handleSubMenuEnter = (path: string) => {
    setActiveSubMenu(path);
  };

  // ✅ Đóng submenu cấp 2 khi rời chuột
  const handleSubMenuLeave = () => {
    setActiveSubMenu(null);
  };

  // ✅ Render submenu cấp 2
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
            {/* Submenu cấp 1 */}
            <Link
              to={item.path}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {item.label}
            </Link>

            {/* Submenu cấp 2 */}
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
    <header className="bg-white shadow-md top-0 w-full z-50">
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

                {/* Submenu cấp 1 */}
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
    </header>
  );
}
