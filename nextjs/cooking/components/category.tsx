import Image from "next/image";
export default function Category() {
  return (
    <div className="pt-20 pb-20">
      <div className="flex justify-evenly">
        <div>
          <Image
            src="/images/breakfast.svg"
            alt="me"
            width="100"
            height="100"
          />
          <span>breakfast</span>
        </div>
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
