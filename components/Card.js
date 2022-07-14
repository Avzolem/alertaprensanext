const Card = ({ title, text, type, setMapLoader }) => {
  return (
    <div className="m-8">
      <div
        className={`card w-96 ${
          type === "reportsMap" ? "bg-cyan-700" : "bg-teal-900"
        } text-primary-content`}
      >
        <div className="card-body">
          <h2
            className={`card-title ${
              type === "reportsMap" ? "text-emerald-300" : "text-orange-400"
            }`}
          >
            {title}
          </h2>
          <p>{text}</p>
          <div className="card-actions justify-end">
            <button
              className="btn bg-cyan-800"
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
