function PostCard2(props) {
  const title = props.title;
  const text = props.text;
  return (
    <div className="p-2">
      <div className="card w-96 bg-cyan-700 text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-emerald-300">{props.data.title}</h2>
          <p>{props.data.text}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
}

export default PostCard2;
