import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar bg-body-tertiary">
      <Link className="text-decoration-none mx-auto p-2" to="/">
        Home
      </Link>
      <Link className="text-decoration-none mx-auto p-2" to="/Create">
        Create
      </Link>
      <Link className="text-decoration-none mx-auto p-2" to="/Read">
        Read
      </Link>
      <Link className="text-decoration-none mx-auto p-2" to="/Update">
        Update
      </Link>
      <Link className="text-decoration-none mx-auto p-2 " to="/Delete">
        Delete
      </Link>
    </nav>
  );
}
