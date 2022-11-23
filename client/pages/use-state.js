import { useState } from "react";

function State() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <main className="text-center">
        <h1 className="text-3xl font-bold">Compteur</h1>
        <br />
        <p>Vous avez cliqué {count} fois</p>
        <br />
        <button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> + </button>
      </main>
    </div>
  );
}

export default State;
