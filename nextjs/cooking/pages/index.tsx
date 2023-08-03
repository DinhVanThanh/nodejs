import Category from "../components/category.tsx";
import Image from "next/image";
import Recipe from "../components/recipe.tsx";
export default function Home() {
  return (
    <div>
      <Category />
      <Recipe />
    </div>
  );
}
