import Navbar from "../Nav";
import Footer from "../Footer";

export default function MainLayout({ children }) {
  return (
    <div className="bg-stone-200 h-full w-full 2xl:h-screen flex flex-col justify-between">
      <Navbar />

      <main className="w-full h-full ">{children}</main>
      <Footer />
    </div>
  );
}
