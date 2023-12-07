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
      link: "/",
    },
    {
      name: "Get Started",
      link: "/",
    },
  ];

  return (
    <nav className="w-full bg-yellow-400 p-3 flex justify-around  align-middle fixed border-b-black border-b-2 z-50">
      <div className="m-auto">
        <Link href={"/"} className="text-5xl font-bold">
          {APP_NAME}
        </Link>
      </div>

      <div className="flex gap-10 p-2 m-auto ">
        {/* {navLink.map((e, i) => {
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
        })} */}
        <div className="flex  gap-10 ">
          <Link href={"/write"} className="hidden md:block lg:block ">
            Write
          </Link>
          <div className="hidden md:block lg:block ">Sign in</div>
          <div>
            <button className="bg-black  p-2 px-4 text-gray-200 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import Link from "next/link";

// import { GiHamburgerMenu } from "react-icons/gi";
// import { useState } from "react";
// // import { button } from "../ui/button";

// const navLinks = [
//   { name: "Tasks", link: "/task" },
//   // { name: "register", link: "/register" },
//   // { name: "login", link: "/login" },
// ];

// const Navbar = () => {
//   const [menu, setMenu] = useState(false);
//   return (
//     <div className=" w-full border-b-gray-400 shadow-md sticky z-10 top-0 ">
//       <div className="flex p-4   justify-between  lg:w-[50%] md:w-[60%] w-[90%] m-auto">
//         <div className="text-2xl md:text-xl  font-bold">
//           <Link href={"/"}>Task Manager</Link>
//         </div>
//         <div className="hidden md:block lg:block">
//           <div className="flex gap-5 text-lg font-md items-center">
//             {navLinks.map((el) => {
//               return (
//                 <Link key={el.name} href={el.link}>
//                   {el.name}
//                 </Link>
//               );
//             })}

//             <div className="flex gap-5">
//               <button>
//                 <Link
//                   href={"/register"}
//                   className="  rounded-md  text-sm font-semibold"
//                 >
//                   Register
//                 </Link>
//               </button>
//               <button>
//                 <Link
//                   href={"/login"}
//                   className="  rounded-md  text-sm font-semibold"
//                 >
//                   Login
//                 </Link>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div
//           className="block sm:hidden lg:hidden"
//           onClick={() => setMenu(!menu)}
//         >
//           <GiHamburgerMenu className="text-3xl" />
//         </div>
//         {menu ? (
//           <div className="absolute mt-10 bg-gray-200 w-[100%] -ml-9 text-2xl text-center p-10 flex flex-col gap-5 -z-10">
//             {navLinks.map((el) => {
//               return (
//                 <Link
//                   key={el.name}
//                   href={el.link}
//                   onClick={() => setMenu(false)}
//                 >
//                   {el.name}
//                 </Link>
//               );
//             })}

//             <div className="flex gap-5 m-auto">
//               <button onClick={() => setMenu(false)}>
//                 <Link
//                   href={"/register"}
//                   className="  rounded-md  text-sm font-semibold"
//                 >
//                   Register
//                 </Link>
//               </button>
//               <button onClick={() => setMenu(false)}>
//                 <Link
//                   href={"/login"}
//                   className="  rounded-md  text-sm font-semibold"
//                 >
//                   Login
//                 </Link>
//               </button>
//             </div>
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
