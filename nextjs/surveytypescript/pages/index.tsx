import Navbar from "@/components/navbar";

export default function Index() {
  return (
    <div>
      <Navbar
        navItem={[
          {
            name: "Home",
            href: "/",
            current: false,
          },
          {
            name: "Tests",
            href: "/",
            current: true,
          },
        ]}
      />
      <div></div>
    </div>
  );
}
