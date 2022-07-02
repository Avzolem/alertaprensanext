import MainLayout from "../components/Layouts/MainLayout";
import Post from "../components/Post";

function Noticias() {
  return (
    <div>
      <MainLayout className="bg-stone-200">
        <div>
          <Post></Post>{" "}
        </div>
      </MainLayout>
    </div>
  );
}

export default Noticias;
