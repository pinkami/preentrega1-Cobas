import React from "react";
import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <CartWidget />
      <ItemListContainer greeting="¡Bienvenido a CuteCatShop en línea!" />
    </div>
  );
}

export default App;

