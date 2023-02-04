import AppHeading from "./components/AppHeading/AppHeading";
import SignIn from "./pages/SignIn/SignIn";

import "./App.css";

function App() {
  return (
    <>
      <AppHeading textColor="black" bgrColor="wheat">
        My Awesome App
      </AppHeading>
      <SignIn />
    </>
  );
}

export default App;
