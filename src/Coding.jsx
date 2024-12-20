import Articles from "./Articles";
import { useLocation } from "react-router-dom";

export default function Coding() {
  const url = useLocation();
  const category = url.pathname.substring(1);
  return (
    <>
      <Articles category={category} />
    </>
  );
}
