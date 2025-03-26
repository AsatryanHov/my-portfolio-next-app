// app/not-found.tsx

export default function NotFound() {
  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        color: "white",
      }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we couldn’t find the page you were looking for.</p>
      <a
        href="/"
        style={{
          color: "white",
          textDecoration: "underline",
        }}>
        Go back home
      </a>
    </div>
  );
}
