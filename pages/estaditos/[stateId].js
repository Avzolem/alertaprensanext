import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MainLayout from "../../components/Layouts/MainLayout";
import PostCard from "../../components/PostCard";
import PostCard2 from "../../components/PostCard2";
import MaxAlert from "../../components/MaxAlert";
import axios from "axios";

// const postsData = [
//   {
//     id: 1,
//     title: "Reporte Ejemplo 1",
//     text: "Soy ovíparo y quiero jugar con todos los niños como Chabelo.",
//   },
//   {
//     id: 2,
//     title: "Reporte Ejemplo 2",
//     text: "Tu tío es una mamá muy buena.",
//   },
//   {
//     id: 3,
//     title: "Reporte Ejemplo 3",
//     text: "¿Y si todas las estatuas griegas en realidad son víctimas de medusa?",
//   },
// ];

const StateDetailPage2 = () => {
  const router = useRouter();
  const { stateId } = router.query;
  const [loading, setLoading] = useState(false); // estado para mostrar que esta cargando
  const [globalError, setGlobalError] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    //esta funcion consume el servicio del API
    const getData = async () => {
      setLoading(true); //inicia loading true
      setGlobalError(null);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/alerts`
          // Para pruebas en el server cambiar a "http://148.229.5.95:3000/maps/all_states"
        );
        const responseAlerts = response.data.all_states;

        console.log("responseAlerts", responseAlerts);

        //find object with stateid in responsealAerts
        const matchedAlert = responseAlerts.find((alert) => {
          return alert.state_code === parseInt(stateId);
        });

        if (!matchedAlert) {
          setGlobalError("No existe alerta para este estado");
          setLoading(false);
          return;
        }

        console.log("matchedAlert", matchedAlert);

        setContent(matchedAlert);
        setLoading(false);

        console.log("Este es el content de content ", content);
      } catch (error) {
        console.log(error);
        setGlobalError("Ocurrio un error trayendo la informacion del server"); //Cachea el error
        setLoading(false);
      }
    };
    console.log("Estoy en el useEffect", stateId);
    if (stateId) getData(); //Ejecuta el GetData
  }, [router.query]);

  // Inicio de la parte de infinite scroll
  const [posts, setPosts] = useState(postsData); // estado para guardar los posts
  const [page, setPage] = useState(1); // estado para guardar la pagina actual
  const [hasMore, setHasMore] = useState(true); // estado para saber si hay mas posts
  const [loadingMore, setLoadingMore] = useState(false); // estado para mostrar que esta cargando
  const [globalErrorMore, setGlobalErrorMore] = useState(null); // estado para mostrar que esta cargando
  const [contentMore, setContentMore] = useState(null); // estado para mostrar que esta cargando
  const [postsMore, setPostsMore] = useState([]); // estado para guardar los posts
  const [pageMore, setPageMore] = useState(1); // estado para guardar la pagina actual

  useEffect(() => {
    const getReports = async () => {
      try {
        const response = await axios.get(
          "https://62e2d20c3891dd9ba8f0755b.mockapi.io/api/reports"
        );
        console.log("response", response);
        setReports(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getReports();
  }, []);

  return (
    <MainLayout>
      <div className="fullcontainer flex justify-center items-center w-full 2xl:flex  2xl:h-[1200px] 2xl:w-screen">
        {loading ? ( // ? es un if
          <p>cargando</p>
        ) : globalError ? ( // : es un else
          globalError
        ) : (
          <div className="w-full flex  justify-center">
            <div className="flex justify-between max-w-7xl w-full ">
              <div>
                <img
                  src={`/images/states/${stateId}.png`}
                  alt={`Imagen del estado ${stateId}`}
                  className="h-full w-full object-cover"
                ></img>
              </div>
              <div className="pt-6 place-content-end ">
                {content && (
                  <MaxAlert
                    title="Alertas Máximas"
                    text={content.alerts}
                    className=""
                  />
                )}
                {/* Inicia el código para traer los posts */}
                {/* Este es el post card original */}
                {/* {postsData.map((post) => (
                  <PostCard key={post.id} title={post.title} text={post.text} />
                ))} */}
                {/* Este es el post card con infinite scroll */}
                <div>
                  {posts && posts.length > 0 ? (
                    <div>
                      {posts.map((post, i) => (
                        <PostCard2 key={i} data={post} />
                      ))}
                    </div>
                  ) : (
                    <p>No hay posts</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default StateDetailPage2;
