import Link from "next/link";
import React from "react";

const Navbar = () => {
  const APP_NAME = "KALAM";
  const navLink = [
    {
      name: "Write",
      link: "/write",
    },
    {
      name: "Sign in",
      link: "/login",
    },
    {
      name: "Get Started",
      link: "/signin",
    },
  ];

  return (
    <nav className="w-full bg-yellow-400 p-3 flex justify-around  align-middle fixed border-b-black border-b-2 z-50">
      <div className="m-auto">
        <Link href={"/"} className="text-5xl font-bold">
          {APP_NAME}
        </Link>
      </div>

      <div className="flex gap-10 p-2 m-auto">
        {navLink.map((e, i) => {
          return (
            <Link href={e.link} className="m-auto">
              {i == navLink.length - 1 ? (
                <button className="bg-black p-2 px-4 text-gray-200 rounded-full">
                  {e.name}
                </button>
              ) : (
                e.name
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
