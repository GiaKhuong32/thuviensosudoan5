import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

import { navItems } from "./nav-items";

interface DesktopNavProps {
  compact?: boolean;
}

const linkBase =
  "relative whitespace-nowrap py-4 text-sm font-semibold tracking-wide transition-colors";

const underline =
  "after:absolute after:inset-x-0 after:bottom-2 after:h-0.5 after:bg-white after:transition-transform";

function DesktopNav({ compact = false }: DesktopNavProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="relative">
      <div
        aria-hidden={!compact}
        className={[
          "absolute inset-0 z-10 mx-auto flex max-w-screen-2xl",
          "items-center gap-3 px-4 transition-all duration-300 ease-out md:px-8",
          compact
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        ].join(" ")}
      >
        <NavLink to="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary">
            <img src="/logo.png" alt="Logo" className="h-5 w-5" />
          </span>

          <span className="whitespace-nowrap text-lg font-bold tracking-wide text-slate-700">
            Sư đoàn 5
          </span>
        </NavLink>
      </div>

      <nav
        className={[
          "mx-auto hidden max-w-screen-2xl items-center justify-center",
          "gap-5 px-4 transition-all duration-300 ease-out md:px-8",
          "xl:flex 2xl:gap-6",
          compact
            ? "pointer-events-none translate-y-2 opacity-0"
            : "translate-y-0 opacity-100",
        ].join(" ")}
      >
        {navItems.map((item, index) => {
          if (item.children) {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={[
                    linkBase,
                    underline,
                    "flex items-center gap-1",
                    "text-white hover:text-white/80",
                    isOpen ? "after:scale-x-100" : "after:scale-x-0",
                  ].join(" ")}
                >
                  {item.label}

                  <FiChevronDown
                    className={[
                      "h-4 w-4 transition-transform",
                      isOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>

                <div
                  className={[
                    "absolute left-1/2 top-full z-50",
                    "w-[24rem] -translate-x-1/2",
                    "rounded-lg border border-slate-200",
                    "bg-white py-2 shadow-lg",
                    "transition-all duration-200",
                    isOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0",
                  ].join(" ")}
                >
                  {item.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      onClick={() => setOpenIndex(null)}
                      className={({ isActive }) =>
                        [
                          "block px-4 py-2.5 text-sm font-medium",
                          "leading-5 transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-slate-700 hover:bg-slate-50 hover:text-primary",
                        ].join(" ")
                      }
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <NavLink
              key={item.to}
              to={item.to!}
              end={item.end}
              className={({ isActive }) =>
                [
                  linkBase,
                  underline,
                  isActive
                    ? "text-white after:scale-x-100"
                    : "text-white hover:text-white/80 after:scale-x-0",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}

export default DesktopNav;
