import React,{ useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzas, setPizzas] = useState([]);

  const [pizzaForm, setPizzaForm] = useState({});

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(resp => resp.json())
    .then(data => setPizzas(data))
  }, [])



  return (
    <>
      <Header />
      <PizzaForm checked={checked} setChecked={setChecked} setPizzas={setPizzas} pizzas={pizzas} pizzaForm={pizzaForm} setPizzaForm={setPizzaForm}/>
      <PizzaList  pizzas={pizzas} pizzaForm={pizzaForm} setPizzaForm={setPizzaForm}/>
    </>
  );
}

export default App;
