import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MainLayout from "../../components/Layouts/MainLayout";
import PostCard from "../../components/PostCard";
import MaxAlert from "../../components/MaxAlert";
import axios from "axios";
import PostCard2 from "../../components/PostCard2";

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

const StateDetailPage = ({ data }) => {
  const router = useRouter();
  const { stateId } = router.query;
  const [loading, setLoading] = useState(false); // estado para mostrar que esta cargando
  const [globalError, setGlobalError] = useState(null);
  const [content, setContent] = useState(null);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const getReports = async () => {
      try {
        const response = await axios.get(
          "https://62e2d20c3891dd9ba8f0755b.mockapi.io/api/reports"
        );
        console.log(response);
        setReports(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getReports();
  }, []);

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
                {reports && reports.length > 0 ? (
                  <div className="postscontainer border flex flex-col justify-center items-center px-2 w-full md:max-w-2xl ">
                    {reports.map((report, i) => (
                      <PostCard2 key={i} data={report} />
                    ))}
                  </div>
                ) : (
                  <p>No hay reportes</p>
                )}
                {/* {postsData.map((post) => (
                  <PostCard key={post.id} title={post.title} text={post.text} />
                ))} */}
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default StateDetailPage;
