import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MainLayout from "../../components/Layouts/MainLayout";
import MaxAlert from "../../components/MaxAlert";
import axios from "axios";
import { parse } from "postcss";
import PostCard2 from "../../components/PostCard2";

const StateDetailPage = () => {
  const router = useRouter();
  const { stateId } = router.query;
  const [loading, setLoading] = useState(false); // estado para mostrar que esta cargando
  const [globalError, setGlobalError] = useState(null);
  const [content, setContent] = useState(null);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const getReports = async () => {
      try {
        const response = await axios.get("/api/reports");
        console.log("Este es un response", response);
        setReports(response.data.state_reports); //quitar state_reports para api Manuel
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
          return alert.name === stateId;
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
      <div className="fullcontainer justify-center items-center w-auto h-auto mb-32">
        {loading ? ( // ? es un if
          <p>cargando</p>
        ) : globalError ? ( // : es un else
          globalError
        ) : (
          <div className="w-auto justify-items-center  ">
            <div className="flex flex-col justify-center md:flex-row md:justify-around md:w-full ">
              <div className="self-center">
                <h1 className="text-center font-bold text-5xl my-5 text-teal-600 uppercase">
                  {stateId}
                </h1>
                <img
                  src={`/images/states/${stateId}.png`}
                  alt={`Imagen del estado ${stateId}`}
                  className=" h-auto w-auto md:h-auto md:w-fit object-cover "
                ></img>
              </div>
              <div className=" overflow-auto h-128  pt-6 place-content-end ">
                {content && (
                  <MaxAlert
                    title="Alertas Máximas"
                    text={content.alerts}
                    className=""
                  />
                )}
                {/* {postsData.map((post) => (
                  <PostCard key={post.id} title={post.title} text={post.text} />
                ))} */}
                <div className="">
                  {reports && reports.length > 0 ? (
                    <div className="postscontainer border flex flex-col justify-center items-center px-2 w-full md:max-w-2xl ">
                      {reports.map((report, i) => (
                        <PostCard2 className="" key={i} data={report} />
                      ))}
                    </div>
                  ) : (
                    <p>No hay reportes</p>
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

export default StateDetailPage;
