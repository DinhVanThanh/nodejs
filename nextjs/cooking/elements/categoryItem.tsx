import Image from "next/image";

export default function CategoryItem(props) {
  return (
    <div>
      <Image src={props.data.image} alt="me" width="100" height="100" />
      <span>{props.data.name}</span>
    </div>
  );
}
