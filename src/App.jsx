import AppHeading from "./components/AppHeading/AppHeading";

import "./App.css";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <>
      <AppHeading textColor="black" bgrColor="wheat">
        My Awesome App
      </AppHeading>
      <Profile />
    </>
  );
}

export default App;
