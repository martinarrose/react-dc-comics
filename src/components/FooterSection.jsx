export default function FooterSection({ title, elements }) {
  return (
    <div className="sites">
      <h2> {title} </h2>
      {elements.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  );
}
