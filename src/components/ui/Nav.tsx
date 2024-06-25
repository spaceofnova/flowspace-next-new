import { Link, useLocation } from "react-router-dom";
import { FiGrid, FiHome, FiSettings, FiShoppingBag } from "react-icons/fi";
import { User } from "@supabase/supabase-js";
import Div from "./elements/Div";

export default function Nav({ user }: { user: User }) {
  const location = useLocation();

  const NavPages = [
    {
      name: "Home",
      path: "/web",
      icon: <FiHome className="w-full h-full" />,
    },
    {
      name: "Apps",
      path: "/web/apps",
      icon: <FiGrid className="w-full h-full" />,
    },
    {
      name: "Store",
      path: "/web/store",
      icon: <FiShoppingBag className="w-full h-full" />,
    },
    {
      name: "Settings",
      path: "/web/settings",
      icon: <FiSettings className="w-full h-full" />,
      bottom: true,
    },
  ];
  return (
    <Div className="absolute left-0 top-0 flex flex-col w-12 h-full z-40 justify-between">
      <div>
        <div>
          <img src="/images/icons/icon-72x72.png" alt="Flowspace Logo" className="w-full aspect-square p-2" />
        </div>
        {NavPages.map((page) => (
          <Link
            to={page.path}
            key={page.name}
            className={`flex items-center justify-center w-full aspect-square transition-all duration-400 ease-out gap-1 ${
              location.pathname === page.path ? "text-primary" : ""
            } ${page.bottom ? "absolute bottom-0" : ""}`}
          >
            <div className="w-full h-full p-3">{page.icon}</div>
          </Link>
        ))}
      </div>
      <div>{user?.user_metadata.display_name}</div>
    </Div>
  );
}
