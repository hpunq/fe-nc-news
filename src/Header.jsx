import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <h1 className="header">
        <Link to="/">NC NEWS</Link>
      </h1>
    </>
  );
}
