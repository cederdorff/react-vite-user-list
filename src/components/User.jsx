export default function User({ name, mail, title, image }) {
  return (
    <div className="user-card">
      <img src={image} />
      <h2>{name}</h2>
      <p>Mail: {mail}</p>
      <p>Title: {title}</p>
    </div>
  );
}
