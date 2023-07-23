import Image from "next/image";
export default function Navbar() {
  const menus = ["Home", "Recipes", "Blog", "Contact", "About us"];
  return (
    <div className="text h-12 flex justify-evenly cursor-pointer">
      <Image src="/logo.svg" alt="me" width="64" height="64" />
      {menus.map((x) => {
        return <span className="flex justify-center items-center">{x}</span>;
      })}
      <Image src="/icons/facebook.svg" alt="me" width="64" height="64" />
    </div>
  );
}
