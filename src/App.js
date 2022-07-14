import Home from "./Components/Home";
import NavBarComponent from "./Components/NavBarComponent";

function App() {
  return (
    <div className="App" >
      <NavBarComponent texto="Isaac Gómez"/>
      <Home/>
      <NavBarComponent texto="Desarrollado por @Isaac G"/>

    </div>
  );
}

export default App;
