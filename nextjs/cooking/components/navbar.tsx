import Image from "next/image";
export default function Navbar() {
  const menus = ["Home", "Recipes", "Blog", "Contact", "About us"];
  return (
    <div className="text h-12 flex justify-evenly cursor-pointer font-bold">
      <Image src="/logo.svg" alt="me" width="64" height="64" />
      {menus.map((x) => {
        return (
          <span className="flex justify-center items-center  w-24 hover:bg-indigo-500 hover:text-white transition duration-200 ease-in hover:rounded-r-3xl hover:rounded-l-3xl rounded-r-3xl rounded-l-3xl">
            {x}
          </span>
        );
      })}
      <Image src="/icons/facebook.svg" alt="me" width="64" height="64" />
    </div>
  );
}
