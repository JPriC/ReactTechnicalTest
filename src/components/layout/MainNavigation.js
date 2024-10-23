import { Link, useLocation } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import FavoritesContext from "../../providers/favoritesContext";

function MainNavigation() {
  const [showNavigation, setShowNavigation] = useState(true);

  const location = useLocation();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const favoritesCtx = useContext(FavoritesContext);

  /* FunciOn que maneja el scroll una vez es realizado en la pAgina */
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        if (currentScrollY > lastScrollY.current && currentScrollY > 75) {
          /* Se cambia estado a false en caso de un scroll mayor a 75 */
          setShowNavigation(false);
        } else {
          setShowNavigation(true);
        }
        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });

      ticking.current = true;
    }
  };

  /* EventListener del scroll en la pAgina */
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${classes.header} ${
        showNavigation ? classes.show : classes.hide
      }`}
      data-test="navigation-header"
    >
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? classes.active : ""}
            >
              All Meetups
            </Link>
          </li>

          <li>
            <Link
              to="/new-meetup"
              className={
                location.pathname === "/new-meetup" ? classes.active : ""
              }
            >
              Add New Meetup
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className={
                location.pathname === "/favorites" ? classes.active : ""
              }
            >
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
