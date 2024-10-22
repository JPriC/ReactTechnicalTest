import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

function AllMeetupsPage(props) {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {props.meetups.map((item) => (
          <MeetupItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default AllMeetupsPage;
