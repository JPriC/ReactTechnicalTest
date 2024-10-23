import { useContext, useState, useEffect } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../providers/favoritesContext";

function MeetupItem({ item, className }) {
  const favoritesCtx = useContext(FavoritesContext);
  const isFavorite = favoritesCtx.isFavorite(item.id);

  const [showStar, setShowStar] = useState(isFavorite);
  const [animateStar, setAnimateStar] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);

  useEffect(() => {
    if (isFavorite) {
      setShowStar(true);
      setAnimateStar(true);
    } else if (!isFavorite && showStar) {
      setAnimateStar(false);
      const timer = setTimeout(() => {
        setShowStar(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isFavorite, showStar]);

  function toggleFavoriteHandler() {
    if (isFavorite) {
      favoritesCtx.removeFavorite(item.id);
    } else {
      favoritesCtx.addFavorite(item);
    }

    setAnimateButton(true);
    setTimeout(() => {
      setAnimateButton(false);
    }, 500);
  }

  return (
    <li
      className={`${classes.item} ${classes.showExit}`}
      data-test="meet-up-item"
    >
      <Card>
        {showStar && (
          <span
            className={`${classes.star} ${
              animateStar ? classes.fadeIn : classes.fadeOut
            }`}
          >
            ⭐
          </span>
        )}
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          <button
            onClick={toggleFavoriteHandler}
            className={`${classes.button} ${
              isFavorite ? classes.favorited : ""
            } ${animateButton ? classes.animateButton : ""}`}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
