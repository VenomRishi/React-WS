import React, { useState, useEffect } from "react";

function HookUseEffect() {
  const [count, setcount] = useState(0);
  // if you want to run something on component render and component update
  // then put inside the useEffect method
  // if you put something on click so initially code nothing to do and once you clicked
  // then suddenly something different will perform this could be inconsistent
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });
  return (
    <div>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Click {count} times
      </button>
    </div>
  );
}

export default HookUseEffect;
