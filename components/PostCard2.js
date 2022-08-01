const Report = (props) => {
  console.log(props);
  return (
    <div className="p-2">
      <div className="card w-96 bg-cyan-700 text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-emerald-300">
            Nivel {props.data.level}
          </h2>
          <p>{props.data.description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Report;
