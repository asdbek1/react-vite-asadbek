import { useState } from "react";

function App() {
  const [text, setText] = useState(0);

  console.log(text);

  return (
    <>
      <div className="card">
        <h2>{text}</h2>
        <button className="btn2"  onClick={() => setText(text + 1)}>Click +</button>
      </div>
    </>
  );
};
export default App;