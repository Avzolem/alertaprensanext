import MainLayout from "../components/Layouts/MainLayout";
import Curso from "../components/Curso";

function Cursos() {
  return (
    <div>
      <MainLayout className="bg-stone-200">
        <div>
          <Curso />
        </div>
      </MainLayout>
    </div>
  );
}

export default Cursos;
