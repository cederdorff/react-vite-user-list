export default function User({ name, mail, title }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {mail}</p>
      <p>Title: {title}</p>
    </div>
  );
}
