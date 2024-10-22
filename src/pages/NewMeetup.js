import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupsPage(props) {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    props.onAddMeetup(meetupData);
    navigate("/", { replace: true });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
