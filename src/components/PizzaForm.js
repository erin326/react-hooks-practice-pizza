import React from "react";

function PizzaForm({ pizzas, pizzaForm, setPizzaForm, setPizzas, checked, setChecked}) {

  
function handleToppingChange(event) {
  setPizzaForm({...pizzaForm, topping: event.target.value})
}

function handleSizeChange(event) {
  setPizzaForm({...pizzaForm, size: event.target.value})
}

function handleVegChange(event) {
  if(event.target.value === 'Vegetarian') {
    setPizzaForm({...pizzaForm, vegetarian: true})
  }else if(event.target.value === 'Not Vegetarian') {
    setPizzaForm({...pizzaForm, vegetarian: false})
  }

  // setChecked(checked => !checked)
  console.log(event.target.value)
}

function handleSubmit(event) {
  event.preventDefault();
  
  const editedPizza = pizzas.map(pizza => {
    if(pizza.id === pizzaForm.id) {
      console.log(pizza)
      return pizza = pizzaForm;
    }else{
      return pizza;
    }

  })
  setPizzas(editedPizza)
  console.log(pizzaForm)
}
  return (
    <form onSubmit={ handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            value={pizzaForm ? pizzaForm.topping : null}
            onChange={handleToppingChange}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
          <select value={pizzaForm ? pizzaForm.size : null} 
          onChange={handleSizeChange}
          className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={handleVegChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={handleVegChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
