import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Dropdown() {
  const url = useLocation();
  const pathname = url.pathname;
  let filterName = "";

  const lookup = {
    "/": "allArticles",
    "/coding": "#coding",
    "/cooking": "#cooking",
    "/football": "#football",
  };

  filterName = lookup[pathname];

  const filters = ["#coding", "#cooking", "#football", "allArticles"];
  if (filterName === "allArticles") {
    return (
      <h2 className="sub-header">
        fetch(
        <div className="dropdown">
          <span>{filterName}</span>
          <div className="dropdown-content">
            <Link to={"/coding"}>{filters[0]}</Link>
            <Link to={"/cooking"}>{filters[1]}</Link>
            <Link to={"/football"}>{filters[2]}</Link>
          </div>
        </div>
        )
      </h2>
    );
  } else if (filterName === "#coding") {
    return (
      <h2 className="sub-header">
        fetch(
        <div className="dropdown">
          <span>{filterName}</span>
          <div className="dropdown-content">
            <Link to={"/"}>{filters[3]}</Link>
            <Link to={"/cooking"}>{filters[1]}</Link>
            <Link to={"/football"}>{filters[2]}</Link>
          </div>
        </div>
        )
      </h2>
    );
  } else if (filterName === "#cooking") {
    return (
      <h2 className="sub-header">
        fetch(
        <div className="dropdown">
          <span>{filterName}</span>
          <div className="dropdown-content">
            <Link to={"/coding"}>{filters[0]}</Link>
            <Link to={"/"}>{filters[3]}</Link>
            <Link to={"/football"}>{filters[2]}</Link>
          </div>
        </div>
        )
      </h2>
    );
  } else if (filterName === "#football") {
    return (
      <h2 className="sub-header">
        fetch(
        <div className="dropdown">
          <span>{filterName}</span>
          <div className="dropdown-content">
            <Link to={"/coding"}>{filters[0]}</Link>
            <Link to={"/cooking"}>{filters[1]}</Link>
            <Link to={"/"}>{filters[3]}</Link>
          </div>
        </div>
        )
      </h2>
    );
  }
}
