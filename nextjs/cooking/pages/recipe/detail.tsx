import Image from "next/image";
import ReactPlayer from "react-player";
import React, { useState, useEffect } from "react";
export default function RecipeDetail() {
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    setDetail({ videoUrl: "https://www.youtube.com/watch?v=wWgIAphfn2U" });
  }, []);
  return (
    <div className={"p-10 flex flex-col gap-10"}>
      <article className={"prose desktop:prose-xl laptop:prose-lg"}>
        <h2>Health Japanese Fried Rice</h2>
      </article>
      <div>
        <div className={"flex gap-x-20"}>
          <div className={"rounded-full flex justify-between gap-x-3"}>
            <Image
              className={"rounded-lg inline-block"}
              src="/images/avatar.png"
              alt="me"
              width="50"
              height="50"
            />
            <div className={"flex flex-col justify-between"}>
              <div className={"font-bold"}>John Smith</div>
              <div className={"font-medium"}>15 March 2022</div>
            </div>
          </div>
          <div className={"rounded-full flex justify-between gap-x-3"}>
            <Image
              className={"rounded-lg inline-block"}
              src="/icons/time.svg"
              alt="me"
              width="30"
              height="30"
            />
            <div className={"flex flex-col justify-between"}>
              <div className={"font-bold"}>PREP TIME</div>
              <div className={"font-medium"}>15 Minutes</div>
            </div>
          </div>
          <div className={"rounded-full flex justify-between gap-x-3"}>
            <Image
              className={"rounded-lg inline-block"}
              src="/icons/time.svg"
              alt="me"
              width="30"
              height="30"
            />
            <div className={"flex flex-col justify-between"}>
              <div className={"font-bold"}>COOK TIME</div>
              <div className={"font-medium"}>15 Minutes</div>
            </div>
          </div>
          <div className={"rounded-full flex justify-between gap-x-3"}>
            <Image
              className={"rounded-lg inline-block"}
              src="/icons/cook_type.svg"
              alt="me"
              width="30"
              height="30"
            />
            <div className={"flex flex-col justify-center"}>
              <div className={"font-medium"}>Chicken</div>
            </div>
          </div>
        </div>
      </div>
      <div>{detail ? <ReactPlayer url={detail.videoUrl} /> : ""}</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <article className={"prose desktop:prose-xl laptop:prose-lg"}>
        <h3>Ingredients</h3>
        <ul class="list-disc list-outside">
          <li>
            Now this is a story all about how, my life got flipped-turned upside
            down
          </li>
          <li>
            Now this is a story all about how, my life got flipped-turned upside
            down
          </li>
          <li>
            Now this is a story all about how, my life got flipped-turned upside
            down
          </li>
        </ul>
      </article>
      <article className={"prose desktop:prose-xl laptop:prose-lg"}>
        <h3>Directions</h3>
        <ul class="list-decimal list-outside">
          <li>
            Now this is a story all about how, my life got flipped-turned upside
            down
          </li>
          <li>
            Now this is a story all about how, my life got flipped-turned upside
            down
          </li>
          <li>
            Now this is a story all about how, my life got flipped-turned upside
            down
          </li>
        </ul>
      </article>
    </div>
  );
}
