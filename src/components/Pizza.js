import React from "react";

function Pizza({id, topping, size, vegetarian, onEditClick}) {

  vegetarian === true ? vegetarian ='Yes' : vegetarian ='No';
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian}</td>
      <td>
        <button onClick={() => onEditClick(id)} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
