export default function User({ name, email, title }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Title: {title}</p>
    </div>
  );
}
