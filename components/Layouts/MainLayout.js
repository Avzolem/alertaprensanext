import Navbar from "../Nav";
import Footer from "../Footer";

export default function MainLayout({ children }) {
  return (
    <div className="bg-stone-200">
      <Navbar />

      <main>{children}</main>
      <Footer />
    </div>
  );
}
