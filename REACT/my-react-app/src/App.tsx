import { useState, useEffect, KeyboardEvent } from "react";

import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

function App() {

  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState<string>('');

  useEffect(() => {
    console.log("El contador ha cambiado");
  }, [contador]);

  const cambiaNombre = (e: KeyboardEvent) => {
    const valor = (e.target as HTMLInputElement).value;
    setNombre(valor);
    console.log(nombre);
  }

  useEffect(() => {
    console.log("El nombre ha cambiado", nombre);
  }, [nombre]);

  return (
    <>
      <Header />
      <p>Hola {nombre}</p>
      <p>Count: <span>{contador}</span></p>
      <input type="text" onKeyUp={cambiaNombre} />
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <Footer />
    </>
  )
}

export default App
