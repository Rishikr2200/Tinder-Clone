import "./App.css";
import Header from "./Header";
import SwipeButton from "./SwipeButton";
import TinderCard from "./TinderCards";

function App() {
  // BEM class naong convention
  return (
    <div className="App">
      <Header />
      <TinderCard /> 
      <SwipeButton />
      </div>
  );
}

export default App;
