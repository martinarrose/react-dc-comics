export default function ThumbWithTitle({ title, thumb }) {
  return (
    <div className="card">
      <img src={thumb} className="card-image"></img>
      <h2 className="card-title">{title}</h2>
    </div>
  );
}
