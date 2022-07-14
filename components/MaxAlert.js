function MaxAlert(props) {
  const title = props.title;
  const text = props.text;
  return (
    <div class="card w-96 bg-teal-900 text-primary-content">
      <div class="card-body">
        <h2 class="card-title text-orange-300">{title}</h2>
        <p className="text-bold">{text}</p>
        <div class="card-actions justify-end"></div>
      </div>
    </div>
  );
}

export default MaxAlert;
