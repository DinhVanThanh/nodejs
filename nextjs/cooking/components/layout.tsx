import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="bg-slate-100 pb-36">{children}</main>
    </>
  );
}
