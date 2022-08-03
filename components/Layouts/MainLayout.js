import Navbar from "../Nav";
import Footer from "../Footer";

export default function MainLayout({ children }) {
  return (
    <div className="bg-stone-200 h-full w-screen">
      <Navbar />

      <main className="w-full h-fit">{children}</main>
      <Footer />
    </div>
  );
}
