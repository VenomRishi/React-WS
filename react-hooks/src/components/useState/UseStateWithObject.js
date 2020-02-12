import React, { useState } from "react";

function UseStateWithObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={e => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={e => setName({ ...name, lastName: e.target.value })}
      />
      <h2>Your fname - {name.firstName}</h2>
      <h2>Your lname - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
}

export default UseStateWithObject;
