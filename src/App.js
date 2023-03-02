// import logo from "./logo.svg";
import "./App.css";
import demo from "./demo";
function App() {
  const nextPage = () => {
    return (window.location.href = "/demo");
  };
  return (
    <div className="App">
      {/* <h1>Hi my name is Roshan Padal</h1> */}
      <button onClick={nextPage}>go to</button>
    </div>
  );
}

export default App;
