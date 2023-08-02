import Image from "next/image";
import React, { useState, useEffect } from "react";
import CategoryItem from "../elements/categoryItem";

export default function Category() {
  const [category, setCategories] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch("http://localhost:4000/category/list/all", {
          method: "GET",
          mode: "cors",
        });
        setCategories(await result.json());
        console.log(category);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="pt-20 pb-20">
      <div className="flex justify-evenly">
        {category.map((item) => {
          return <CategoryItem data={item} />;
        })}
      </div>
    </div>
  );
}
