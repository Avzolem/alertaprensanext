function MaxAlert(props) {
  const title = props.title;
  const text = props.text;
  return (
    <div className="flex flex-1 p-2 justify-center">
      <div className="card rounded-md w-96 bg-teal-900 text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-orange-300">{title}</h2>
          <p className="text-bold font-extrabold text-2xl">{text}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
}

export default MaxAlert;
