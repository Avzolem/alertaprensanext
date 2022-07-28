import Navbar from "../Nav";
import Footer from "../Footer";

export default function MainLayout({ children }) {
  return (
    <div className="bg-stone-200 h-screen w-full">
      <Navbar />

      <main className="w-full">{children}</main>
      <Footer className="2xl:inset-x-0 bottom-0" />
    </div>
  );
}
