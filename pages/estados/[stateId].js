import { useRouter } from "next/router";
import MainLayout from "../../components/Layouts/MainLayout";
import PostCard from "../../components/PostCard";
import MaxAlert from "../../components/MaxAlert";

const postsData = [
  {
    id: 1,
    title: "Reporte Ejemplo 1",
    text: "Quiero ser ovíparo.",
  },
  {
    id: 2,
    title: "Reporte Ejemplo 2",
    text: "Soy el juepuchas",
  },
  { id: 3, title: "Reporte Ejemplo 3", text: "Soy el juepuchas 2" },
];

const StateDetailPage = () => {
  const router = useRouter();
  const { stateId } = router.query;
  return (
    <MainLayout>
      <div className="w-full flex border-8 border-red-500 justify-center">
        <div className="flex justify-between max-w-7xl w-full ">
          <div>
            <img
              src={`/images/states/${stateId}.png`}
              alt={`Imagen del estado ${stateId}`}
            ></img>
          </div>
          <div className="pt-6 place-content-end ">
            <MaxAlert title="Alertas Máximas" text="200" className="p-6" />
            {postsData.map((post) => (
              <PostCard key={post.id} title={post.title} text={post.text} />
            ))}
          </div>
          {/* <div className="pt-6 pl-6">
          <MaxAlert title="Alertas Máximas" text="200" />
        </div> */}
        </div>
      </div>
      <h1>Mostrar aqui la info del estado {stateId}</h1>
    </MainLayout>
  );
};

export default StateDetailPage;
