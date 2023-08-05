import Image from "next/image";
import Link from "next/link";

export default function RecipeCard(props) {
  return (
    <Link href={`/recipe/detail`}>
      <div className={"rounded-md p-4 bg-white w-56 shadow-2xl"}>
        <div className={"-translate-y-24 h-28"}>
          <Image
            src="/hamburger.png"
            alt="me"
            width="200"
            height="200"
            style={{ borderRadius: 8 }}
          />
        </div>
        <div style={{ wordWrap: "break-word" }}>{props.data.name}</div>
        <div>
          <span>
            <Image
              className={"rounded-lg inline-block"}
              src="/icons/time.svg"
              alt="me"
              width="24"
              height="24"
            />
            <span>{props.data.time} minutes</span>
          </span>
          <span>
            <span>
              <Image
                className={"rounded-lg inline-block"}
                src="/icons/cook_type.svg"
                alt="me"
                width="24"
                height="24"
              />
            </span>
            <span>{props.data.category.name}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
