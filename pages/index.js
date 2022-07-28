import { useState, useEffect } from "react";
import axios from "axios";
import Map from "../components/Map";
import Map2 from "../components/Map2";
import ReactTooltip from "react-tooltip";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Card";
import Head from "next/head";

export default function Home() {
  const [states, setStates] = useState([]); //para guardar el arreglo de los estados que viene del API, inicia en vacio
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(false); // estado para mostrar que esta cargando
  const [globalError, setGlobalError] = useState(null); //para mostrar si hay un error trayendo informacion
  const [content, setContent] = useState(""); //para guardar el texto que va en el tooltip cuando se hace hover en un estado del mapa
  const [maploader, setMapLoader] = useState("reportsMap");
  const [totalalerts, setTotalalerts] = useState("");
  const [totalreports, setTotalreports] = useState("");

  // esto se ejecuta una vez, una vez que el componente se monta
  useEffect(() => {
    //esta funcion consume el servicio del API
    const getData = async () => {
      setLoading(true); //inicia loading true
      setGlobalError(null);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/states`
          // Para pruebas en el server cambiar a "http://148.229.5.95:3000/maps/all_states"
        ); //le hace GET a el api de estados, el await no se puede utilizar si la funcion padre no tiene Async
        const responseStates = response.data.all_states; //Para pruebas en el server cambiar a response.data ;
        //gets minimum and maximum of reports of states
        const minValue = Math.min(
          ...responseStates.map((state) => {
            return state.reports;
          })
        );
        const maxValue = Math.max(
          ...responseStates.map((state) => {
            return state.reports;
          })
        );

        const parsedStates = responseStates.map((state) => {
          const newState = { ...state };
          //set opacity from 0 to 1 using min and max values
          newState.opacity =
            (state.reports - minValue) / (maxValue - minValue) + 0.15; // (state.reports - minValue) / (maxValue - minValue);
          newState.url = `/estados/${state.state_code}`;
          return newState;
        });

        setStates(parsedStates); //actualiza el estado de react con los estados de mexico que regreso el API
        console.log("Esto es el primer arreglo", parsedStates);

        const responsealerts = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/alerts`
          // Para pruebas en el server cambiar a "http://148.229.5.95:3000/maps/all_states"
        );
        const responseAlerts = responsealerts.data.all_states; //Para pruebas en el server cambiar a response.data  ;
        //gets minimum and maximum of reports of states
        const minValuetwo = Math.min(
          ...responseAlerts.map((state) => state.alerts)
        );
        const maxValuetwo = Math.max(
          ...responseAlerts.map((state) => state.alerts)
        );
        const parsedAlerts = responseAlerts.map((state) => {
          const newState = { ...state };
          //set opacity from 0 to 1 using min and max values
          newState.opacity =
            (state.alerts - minValuetwo) / (maxValuetwo - minValuetwo) + 0.15; //
          newState.url = `/estados/${state.state_code}`;
          return newState;
        });

        setAlerts(parsedAlerts);
        console.log("Esto es el segundo arreglo", parsedAlerts);

        //Aqui se hace la suma de los reportes
        const sumreports = parsedStates.reduce(
          (sum, value) => sum + value.reports,
          0
        );

        console.log("Total de Reportes:", sumreports);
        setTotalreports(sumreports);
        //Aqui se hace la suma de las alertas

        const sumalerts = parsedAlerts.reduce(
          (sum, value) => sum + value.alerts,
          0
        );

        console.log("Total de Alertas:", sumalerts);
        setTotalalerts(sumalerts);
        setLoading(false);

        //
      } catch (error) {
        console.log(error);
        setGlobalError("Ocurrio un error trayendo la informacion del server"); //Cachea el error
        setLoading(false);
      }
    };
    console.log("Estoy en el useEffect");
    getData(); //Ejecuta el GetData
  }, []); // Se usan los [] para que se ejecute 1 sola vez el useeffect

  //todo lo que esta dentro de return en un componente de react es jsx (html)
  // checar condicionales ternarias
  return (
    <MainLayout>
      <Head>
        <title>ALERTA PRENSA</title>
        <meta
          name="description"
          content="Observatorio digital de riesgos periodísticos"
        ></meta>
      </Head>

      <div className="fullcontainer flex justify-center items-center w-full">
        {loading ? ( // ? es un if
          <p>cargando</p>
        ) : globalError ? ( // : es un else
          globalError
        ) : (
          <div className="wrapper lg:max-w-6xl w-full ">
            <div className="container flex flex-col lg:flex-row lg:justify-between justify-center items-center w-full ">
              <div className="w-full  lg:max-w-full lg:w-5/12">
                {states.length > 0 && (
                  <div className="container flex flex-col justify-start items-center">
                    <div className="cardcontainer  flex justify-center w-full mt-4">
                      <Card 
                        title="Reporte de amenazas"
                        text="Mapeo de reportes de amenazas por estado"
                        type="reportsMap"
                        setMapLoader={setMapLoader}
                        total={totalreports}
                      />
                    </div>
                    <div className="mt-4 flex justify-center mb-4 w-full ">
                      <Card 
                        title="Alertas máximas"
                        text="Mapeo del registro de las alertas máximas emitidas en México"
                        type="alertsMap"
                        setMapLoader={setMapLoader}
                        total={totalalerts}
                      />
                    </div>
                  </div>
                )}{" "}
              </div>
              <div className="w-7/12">
                <div className="hidden container lg:flex h-[600px] w-[700px] overflow-hidden xl:flex  xl:h-[800px] xl:w-[1000px] xl:overflow-hidden ">
                  {maploader === "reportsMap" && (
                    <>
                      <Map
                        className=""
                        setTooltipContent={setContent}
                        states={states}
                      />

                      <ReactTooltip backgroundColor="#f6755b">
                        {content}
                      </ReactTooltip>
                    </>
                  )}
                  {maploader === "alertsMap" && (
                    <>
                      <Map2
                        className=""
                        setTooltipContent={setContent}
                        alerts={alerts}
                      />
                      <ReactTooltip backgroundColor="#f6755b">
                        {content}
                      </ReactTooltip>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
