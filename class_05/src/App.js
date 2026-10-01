// import { useState, useCallback } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const sayHello = useCallback(() => {
//     console.log("Hello!");
//   }, []);

//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       <button onClick={sayHello}>
//         Say Hello
//       </button>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={() => navigate("/about")}>
        Go to About
      </button>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
