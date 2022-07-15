import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MainLayout from "../../components/Layouts/MainLayout";
import PostCard from "../../components/PostCard";
import MaxAlert from "../../components/MaxAlert";
import axios from "axios";

const postsData = [
  {
    id: 1,
    title: "Reporte Ejemplo 1",
    text: "Soy ovíparo y quiero jugar con todos los niños como Chabelo.",
  },
  {
    id: 2,
    title: "Reporte Ejemplo 2",
    text: "Tu tío es una mamá muy buena.",
  },
  {
    id: 3,
    title: "Reporte Ejemplo 3",
    text: "¿Y si todas las estatuas griegas en realidad son víctimas de medusa?",
  },
];

const StateDetailPage = () => {
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

  return (
    <MainLayout>
      <div className="fullcontainer flex justify-center items-center w-full">
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
                {postsData.map((post) => (
                  <PostCard key={post.id} title={post.title} text={post.text} />
                ))}
              </div>
            </div>

            <h1>Mostrar aqui la info del estado {stateId}</h1>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default StateDetailPage;
