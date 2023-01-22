import Loader from "./components/Loader/Loader";
import AppHeading from "./components/AppHeading/AppHeading";

import "./App.css";

function App() {
  return (
    <>
      <AppHeading textColor="black" bgrColor="wheat">
        Text
      </AppHeading>
      <h1>Hello World</h1>
      <Loader isLoading={true}>Loading...</Loader>
    </>
  );
}

export default App;
