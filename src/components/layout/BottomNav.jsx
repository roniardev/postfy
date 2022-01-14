import {
  CollectionIcon,
  HomeIcon,
  InformationCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import clsx from "clsx";
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
    exact: true,
  },
  {
    name: "User",
    href: "/users",
    icon: UserCircleIcon,
  },
];

const navigationClasses = (isActive) => {
  return [
    "inline-flex flex-col items-center justify-center h-12 px-2 text-center rounded-md",
    isActive ? "text-sky-500 font-semibold" : "text-gray-600",
    "hover:text-sky-500",
  ];
};

export function BottomNav() {
  const router = useLocation();

  const renderItem = (item) => {
    return (
      <>
        {React.createElement(item.icon, {
          className: "w-8 h-8",
          "aria-hidden": true,
        })}
        <span className="text-xs truncate">{item.name}</span>
      </>
    );
  };

  return (
    <nav className="fixed bottom-0 z-40 flex items-center justify-center w-full h-16 px-2 bg-white border-t border-gray-300">
      <div className="flex items-center justify-center w-full max-w-xl mx-auto">
        <ul className="flex justify-evenly items-center w-full">
          {navItems.map((item) => {
            const isActive = item.exact
              ? item.href === router.pathname
              : router.pathname.startsWith(item.href);

            return (
              <li key={item.name} className="relative">
                <Link
                  to={item.href}
                  onClick={() => console.log(location.pathname)}
                >
                  <span className={clsx(...navigationClasses(isActive))}>
                    {renderItem(item)}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
