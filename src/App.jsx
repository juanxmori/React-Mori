import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a mi tienda online!" />
    </div>
  );
}

export default App;
