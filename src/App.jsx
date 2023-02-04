import AppHeading from "./components/AppHeading/AppHeading";
import EventsExercise from "./components/Events/EventsExercise";

import "./App.css";

function App() {
  return (
    <>
      <AppHeading textColor="black" bgrColor="wheat">
        My Awesome App
      </AppHeading>
      <EventsExercise />
    </>
  );
}

export default App;
