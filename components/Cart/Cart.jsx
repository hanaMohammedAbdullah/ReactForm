import React from "react";

function Cart({ data, handlerState }) {
  function deleteItem(e) {
    handlerState(...prev, (prev) =>
      prev.filter((item) => item.id !== e.target.name)
    );
    console.log("delete", e.target.name);
  }
  return (
    <p>
      <form onSubmit={deleteItem}>
        {data.name} <button name={data.id}>delete</button>
      </form>
    </p>
  );
}

export default Cart;
