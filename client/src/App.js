import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Get started coding now!</h1>
      <p>
        There are no styles applied except for the CSS Reset. Feel free to
        import a package or library.
      </p>
    </>
  );
}

export default App;
