import Image from "next/image";
import React, { useState, useEffect } from "react";

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
          return (
            <div>
              <Image
                src="/images/breakfast.svg"
                alt="me"
                width="100"
                height="100"
              />
              <span>{item.name}</span>
            </div>
          );
        })}

        <div>
          <Image src="/images/vegan.svg" alt="me" width="100" height="100" />
          <span>vegan</span>
        </div>
        <div>
          <Image src="/images/meat.svg" alt="me" width="100" height="100" />
          <span>meat</span>
        </div>
        <div>
          <Image src="/images/dessert.svg" alt="me" width="100" height="100" />
          <span>dessert</span>
        </div>
        <div>
          <Image src="/images/lunch.svg" alt="me" width="100" height="100" />
          <span>lunch</span>
        </div>
        <div>
          <Image
            src="/images/chocolate.svg"
            alt="me"
            width="100"
            height="100"
          />
          <span>chocolate</span>
        </div>
      </div>
    </div>
  );
}
