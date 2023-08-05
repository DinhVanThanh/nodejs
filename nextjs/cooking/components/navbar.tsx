import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const menus = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Recipes",
      path: "/",
    },
    {
      title: "Blog",
      path: "/",
    },
    {
      title: "Contact",
      path: "/",
    },
    {
      title: "About us",
      path: "/",
    },
  ];
  return (
    <div className="text h-12 flex justify-evenly cursor-pointer font-bold items-center">
      <Image src="/logo.svg" alt="me" width="64" height="64" />
      {menus.map((x) => {
        return (
          <Link href={x.path}>
            <div className="flex justify-center items-center  w-24 hover:bg-indigo-500 hover:text-white transition duration-200 ease-in hover:rounded-r-3xl hover:rounded-l-3xl rounded-r-3xl rounded-l-3xl">
              {x.title}
            </div>
          </Link>
        );
      })}
      <Image src="/icons/facebook.svg" alt="me" width="64" height="64" />
    </div>
  );
}
