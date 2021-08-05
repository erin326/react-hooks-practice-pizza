import React, {useState} from "react";
import Pizza from "./Pizza";

function PizzaList({pizzas, pizzaForm, setPizzaForm}) {

  const pizzaList = pizzas.map(pizza => (
    <Pizza key={pizza.id} id={pizza.id} topping={pizza.topping} size={pizza.size} vegetarian={pizza.vegetarian} onEditClick={handleEditClick} />
  ))

  


  function handleEditClick(id) {
    
    // setPizzaForm(pizzaForm);
    // console.log(pizzaForm)
    pizzas.map(pizza => {
      if(pizza.id === id) {
        setPizzaForm({...pizza})
        console.log(pizzaForm);

      }else{
        return pizzaForm
      }
    })
  }


  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzaList}
      </tbody>
    </table>
  );
}

export default PizzaList;
