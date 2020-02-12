import React, { useState } from "react";

function HookCounter() {
  const [name, setName] = useState('rishi');
  return (
    <div>
      <button onClick={() => setName('rishi'+Math.random())}>Count {name}</button>
    </div>
  );
}

export default HookCounter;
