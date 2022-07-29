import Navbar from "../Nav";
import Footer from "../Footer";

export default function MainLayout({ children }) {
  return (
    <div className="bg-stone-200 h-full w-full">
      <Navbar />

      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
}
