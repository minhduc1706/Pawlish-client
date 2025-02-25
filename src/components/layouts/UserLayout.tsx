import { Outlet } from "react-router-dom";
import Footer from "../commons/Footer";
import TopBar from "../commons/TopBar";
import { Header } from "../commons/Header";
import { useState, useEffect } from "react";
import { ChevronsUp } from "lucide-react";

const UserLayout = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>

      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 cursor-pointer"
        >
          <ChevronsUp/>
        </button>
      )}
    </div>
  );
};

export default UserLayout;
