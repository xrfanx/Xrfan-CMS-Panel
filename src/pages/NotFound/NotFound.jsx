import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notFound">
      <h1>404</h1>

      <h2>Oops! Page Not Found</h2>

      <p>
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link to="/" className="homeBtn">
        ⬅ Back to Home Page
      </Link>
    </div>
  );
}