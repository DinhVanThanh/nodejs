import Image from "next/image";
import styles from "./../styles/recipe.module.css";
import React, { useState, useEffect } from "react";
import RecipeCard from "../elements/recipeCard";

export default function Recipe() {
  const [recipe, setRecipes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch("http://localhost:4000/recipe/list/all", {
          method: "GET",
          mode: "cors",
        });
        setRecipes(await result.json());
        console.log(recipe);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div className={"container space-y-28"}>
      <div className={"flex justify-center"}>
        <article className={"prose prose-h1"}>
          <h2>Simple and tasty recipes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </article>
      </div>
      <div className={"flex justify-center space-x-4"}>
        {recipe.map((item) => {
          return <RecipeCard data={item} />;
        })}
      </div>
    </div>
  );
}
