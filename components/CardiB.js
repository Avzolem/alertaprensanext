const Card = ({ title, url }) => {
  return (
    <div
      className={`card rounded-md  w-auto m-4 bg-teal-400 text-primary-content text-sm `}
    >
      <div className="card-body flex-row justify-between place-items-center">
        <h2
          className={`card-title text-bold font-extrabold text-2xl text-white`}
        >
          {title}
        </h2>
        <br></br>
        <div className="card-actions place-content-center">
          <button
            className="btn-sm bg-greynew"
            onClick={() => {
              //when is clicked it redirects to the url of the state
              window.location.href = "/estados/" + url;
            }}
          >
            Consultar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
