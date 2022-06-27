import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoUrl from "../data/mx.json"; //lista de estados con cordenadas para poder pintar el mapa

const Map = ({ setTooltipContent, states }) => {
  //function que toma la lista de estados del api y compara con el valor de statecode del hover, para ver si matchean
  //devuelve un texto
  const findStateCode = (stateCodeHover) => {
    let text = "";
    const match = states.find((state) => {
      return state.state_code === stateCodeHover;
    });

    if (match) {
      text = `${match.name} - ${match.reportes} reportes hechos`;
    } else {
      text = "No hay informacion";
    }

    return text;
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
        {/* dentro tiene evento de mouseenter que luego usa la funcion de findStateCode para hacer match y setear el texto del tooltip */}
        {({ geographies }) =>
          geographies.map((geo) => {
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  console.log("ay ya arriba");
                  const tootltipText = findStateCode(geo.properties.state_code);
                  setTooltipContent(tootltipText); //actualiza el estado del tooltip, que esta en el componente de la pagina
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: "#D6D6DA", //Color Default
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53", //Color Hover
                    outline: "none",
                  },
                  pressed: {
                    //Color Presionado
                    fill: "#E42",
                    outline: "none",
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
