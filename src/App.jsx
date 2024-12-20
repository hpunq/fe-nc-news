import "./App.css";
import Header from "./Header";
import Articles from "./Articles";
import ArticlePage from "./ArticlePage";
import Scroll from "./Scroll";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Spinner } from "@fluentui/react-components";
import { UserContext } from "./UserContext";
import Coding from "./Coding";
import Cooking from "./Cooking";
import Football from "./Football";
import Footer from "./Footer";

function App({ user }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  });

  if (isLoading) return <Spinner appearance="inverted" />;
  else
    return (
      <>
        <UserContext.Provider value={user}>
          <Header />
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/articles/:article_id" element={<ArticlePage />} />
            <Route path="/coding" element={<Coding />} />
            <Route path="/cooking" element={<Cooking />} />
            <Route path="/football" element={<Football />} />
          </Routes>
          <Footer />
          <Scroll />
        </UserContext.Provider>
      </>
    );
}

export default App;
