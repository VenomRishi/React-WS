import React, { useEffect, useState } from "react";

function CustomizeUseEffect() {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("");

  // encounter only if changes in count
  useEffect(() => {
    console.log("useEffect - updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={e => setname(e.target.value)}
      ></input>
      <button onClick={() => setcount(count + 1)}>Count - {count}</button>
    </div>
  );
}

export default CustomizeUseEffect;
