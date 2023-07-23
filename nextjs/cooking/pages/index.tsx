import Navbar from "../components/navbar.tsx";
import Category from "../components/category.tsx";
import Image from "next/image";
export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <Category />
    </div>
  );
}
