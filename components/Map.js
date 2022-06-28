/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoUrl from "../data/mx.json"; //lista de estados con cordenadas para poder pintar el mapa

const Map = ({ setTooltipContent, states }) => {
  if (!states) return null; //if no states, return null

  //esos functions de getTooltiptext, opacity etc, podrian ser una rola que regrese el match.
  //pero bueno, asi funcionan :)

  //function que toma la lista de estados del api y compara con el valor de statecode del hover, para ver si matchean
  //devuelve un texto que se pone en el tooltip
  const getToolTipText = (stateCodeHover) => {
    let text = "";
    const match = states.find((state) => {
      return state.state_code === stateCodeHover;
    });

    if (match) {
      text = `${match.name} - ${match.reportes} Reportes Hechos`;
    } else {
      text = "No hay informacion";
    }

    return text;
  };

  //returns opacity value of state
  const getOpacityValueForState = (stateCode) => {
    const match = states.find((state) => {
      return state.state_code === stateCode;
    });

    if (match) {
      return match.opacity;
    } else {
      return 0.25;
    }
  };

  //gets url for state
  const getUrlForState = (stateCode) => {
    const match = states.find((state) => {
      return state.state_code === stateCode;
    });

    if (match) {
      return match.url;
    } else {
      return "";
    }
  };

  return (
    <ComposableMap
      data-tip=""
      style={{ backgroundColor: "gray" }}
      projection="geoAlbers"
      projectionConfig={{
        center: [-5, 25],
      }}
    >
      <Geographies
        style={{ backgroundColor: "green", bottom: 100 }}
        geography={geoUrl}
      >
        {/* toma la lista de geoUrl y la itera para poder pintar el mapa */}
        {/* dentro tiene evento de mouseenter que luego usa la funcion de getToolTipText para hacer match y setear el texto del tooltip */}
        {({ geographies }) =>
          geographies.map((geo) => {
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  console.log("ay ya arriba");
                  const tootltipText = getToolTipText(
                    geo.properties.state_code
                  );
                  setTooltipContent(tootltipText); //actualiza el estado del tooltip, que esta en el componente de la pagina
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                onClick={() => {
                  //when is clicked it redirects to the url of the state
                  const url = getUrlForState(geo.properties.state_code);
                  console.log("click, redirecting.... =>", url);
                  window.location.href = url;
                }}
                style={{
                  default: {
                    fill: "#ff0000", //Color Default
                    fillOpacity: getOpacityValueForState(
                      geo.properties.state_code
                    ),
                    stroke: "#000",
                  },
                  hover: {
                    fill: "#bb0000", //Color Default
                    fillOpacity: 1,
                    fillOpacity: getOpacityValueForState(
                      geo.properties.state_code
                    ),
                    cursor: "pointer",
                    stroke: "#000",
                  },
                  pressed: {
                    //Color Presionado
                    fill: "#E42",
                    outline: "none",
                    stroke: "#000",
                  },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default Map;
