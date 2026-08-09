import { NavLink } from "react-router-dom";

const navigation = [
  { label: "Trang chủ", to: "/" },
  { label: "Sách", to: "/books" },
  { label: "Danh mục", to: "/categories" },
  { label: "Tin tức", to: "/news" },
  { label: "Giới thiệu", to: "/about" },
  { label: "Liên hệ", to: "/contact" },
];

function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-4">
        {navigation.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              [
                "flex min-h-12 items-center text-sm font-medium transition-colors",
                isActive ? "text-primary" : "text-gray-700 hover:text-primary",
              ].join(" ")
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
