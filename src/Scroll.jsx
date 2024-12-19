import { useState, useEffect } from "react";
import { useStyles } from "./App-css";

export default function Scroll() {
  const [showGoTop, setShowGoTop] = useState(false);
  const styles = useStyles()

  const handleVisibleButton = () => {
    setShowGoTop(window.scrollY > 50);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <div
      className={showGoTop ? "" : styles.goTopHidden}
      onClick={handleScrollUp}>
      <button type={"button"} className={styles.goTop}>
        <span>^</span>
      </button>
    </div>
  );
}
