import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  const [meetups, setMeetups] = useState(() => {
    const storedMeetups = localStorage.getItem("meetups");
    return storedMeetups ? JSON.parse(storedMeetups) : [];
  });

  useEffect(() => {
    if (meetups.length === 0) {
      fetch("/data.json")
        .then((response) => response.json())
        .then((data) => setMeetups(data))
        .catch((error) => console.error("Error al cargar meetups:", error));
    }
  }, [meetups.length]);

  // Sync meetups con localStorage
  useEffect(() => {
    localStorage.setItem("meetups", JSON.stringify(meetups));
  }, [meetups]);

  function addMeetupHandler(meetupData) {
    setMeetups((prevMeetups) => {
      return [meetupData, ...prevMeetups];
    });
  }

  return (
    /* Con Router y Routes definimos las rutas de nuestra aplicaciOn dejamos
      como '/' (home) a AllMeetupsPage, que se supone como la pAg principal */
    <Router>
      <MainNavigation />
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage meetups={meetups} />} />
          <Route
            path="/new-meetup"
            element={<NewMeetupsPage onAddMeetup={addMeetupHandler} />}
          />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
