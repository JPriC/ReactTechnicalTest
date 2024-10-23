import { useContext } from "react";
import FavoritesContext from "../providers/favoritesContext";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let favoritesContent;

  if (favoritesCtx.totalFavorites === 0) {
    return (
      <section>
        <h1>You have no favorites yet.</h1>
      </section>
    );
  } else {
    favoritesContent = (
      <ul className={classes.list}>
        {favoritesCtx.favorites.map((item) => (
          <MeetupItem key={item.id} item={item} />
        ))}
      </ul>
    );
  }
  return <section>{favoritesContent}</section>;
}

export default FavoritesPage;
