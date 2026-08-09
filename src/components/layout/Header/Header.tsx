import { useEffect, useState } from "react";
import { FiChevronDown, FiUser } from "react-icons/fi";

import DesktopNav from "@/components/layout/Navbar/DesktopNav";
import MobileNav from "@/components/layout/Navbar/MobileNav";
import logo from "@/assets/images/logos/logo.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="contents">
      <div className="sticky top-0 z-50 bg-primary text-white shadow-sm xl:static xl:z-auto xl:shadow-none">
        <div className="relative flex h-28 items-center justify-center px-4 md:px-8">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Sư đoàn 5"
              className="h-20 w-20 shrink-0 object-contain"
            />

            <div className="text-center leading-tight">
              <div className="text-4xl font-bold tracking-wide md:text-6xl">
                Sư đoàn 5
              </div>
            </div>
          </div>

          <div className="absolute right-4 flex items-center gap-2 md:right-8">
            <button
              type="button"
              className="hidden items-center gap-2 rounded-md px-2 py-1 transition-colors hover:bg-white/10 md:flex"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary">
                <FiUser className="h-4 w-4" />
              </span>

              <span className="whitespace-nowrap text-sm font-medium text-white">
                Đăng nhập
              </span>

              <FiChevronDown className="h-4 w-4 text-white/80" />
            </button>

            <MobileNav />
          </div>
        </div>
      </div>

      <div
        className={[
          "sticky top-0 z-40 hidden border-t transition-all duration-300 xl:block",
          scrolled
            ? "border-slate-200 bg-white text-slate-700 shadow-md shadow-slate-300/50"
            : "border-white/20 bg-primary text-white shadow-sm",
        ].join(" ")}
      >
        <DesktopNav compact={scrolled} />
      </div>
    </header>
  );
}

export default Header;
