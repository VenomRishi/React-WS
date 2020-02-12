import React, { useState } from "react";

function UseStateWithArray() {
  const [items, setitems] = useState([]);
  const addItem = () => {
    setitems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
      }
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseStateWithArray;
