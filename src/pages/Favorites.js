import { useContext } from "react";
import FavoritesContext from "../providers/favoritesContext";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./Favorites.module.css";

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
      <TransitionGroup component="ul" className={classes.list}>
        {favoritesCtx.favorites.map((item) => (
          <CSSTransition
            key={item.id}
            timeout={300}
            classNames={{
              enter: styles.itemEnter,
              enterActive: styles.itemEnterActive,
              exit: styles.itemExit,
              exitActive: styles.itemExitActive,
            }}
          >
            <MeetupItem item={item} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
  return <section>{favoritesContent}</section>;
}

export default FavoritesPage;
