import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

import { navItems } from "./nav-items";

function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setExpanded(null);
  };

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Đóng menu" : "Mở menu"}
        aria-expanded={open}
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md transition-colors hover:bg-white/10"
      >
        <span
          className={[
            "block h-0.5 w-6 rounded-full bg-white transition-transform duration-300",
            open ? "translate-y-[7px] rotate-45" : "",
          ].join(" ")}
        />

        <span
          className={[
            "block h-0.5 w-6 rounded-full bg-white transition-opacity duration-300",
            open ? "opacity-0" : "",
          ].join(" ")}
        />

        <span
          className={[
            "block h-0.5 w-6 rounded-full bg-white transition-transform duration-300",
            open ? "-translate-y-[7px] -rotate-45" : "",
          ].join(" ")}
        />
      </button>

      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={[
          "fixed inset-0 z-40 bg-slate-900/50",
          "transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      <nav
        aria-hidden={!open}
        className={[
          "fixed right-0 top-0 z-40 flex h-full w-72",
          "max-w-[80vw] flex-col gap-1 overflow-y-auto",
          "bg-white p-4 pt-20 shadow-xl",
          "transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {navItems.map((item) => {
          if (item.children) {
            const isExpanded = expanded === item.label;

            return (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() => setExpanded(isExpanded ? null : item.label)}
                  className="flex w-full items-center justify-between rounded-md px-4 py-3 text-sm font-semibold tracking-wide text-slate-700 transition-colors hover:bg-slate-100"
                >
                  {item.label}

                  <FiChevronDown
                    className={[
                      "h-4 w-4 transition-transform",
                      isExpanded ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>

                {isExpanded && (
                  <div className="ml-3 flex flex-col border-l border-slate-200 pl-2">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          [
                            "rounded-md px-4 py-2.5 text-sm",
                            "leading-5 transition-colors",
                            isActive
                              ? "bg-primary/10 text-primary"
                              : "text-slate-600 hover:bg-slate-100 hover:text-primary",
                          ].join(" ")
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <NavLink
              key={item.to}
              to={item.to!}
              end={item.end}
              onClick={closeMenu}
              className={({ isActive }) =>
                [
                  "rounded-md px-4 py-3 text-sm font-semibold",
                  "tracking-wide transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-slate-700 hover:bg-slate-100 hover:text-primary",
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

export default MobileNav;
