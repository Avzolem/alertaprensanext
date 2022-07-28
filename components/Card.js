const Card = ({ title, text, type, setMapLoader }) => {
  return (
    <div className="mx-4 w-full  lg:mx-8">
      <div
        className={`card rounded-md  w-full lg:w-80 h-40 ${
          type === "reportsMap" ? "bg-azulgrey" : "bg-azuldark"
        } text-primary-content text-sm`}
      >
        <div className="card-body">
          <h2
            className={`card-title ${
              type === "reportsMap" ? "text-emerald-300" : "text-orangenew"
            }`}
          >
            {title}
          </h2>
          <p>{text}</p>
          <div className="card-actions justify-end">
            <button
              className="btn-sm bg-greynew"
              onClick={() => setMapLoader(type)}
            >
              Consulta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
