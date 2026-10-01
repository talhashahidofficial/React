import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(1);

  const cart = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 100 },
  ];

  const totalPrice = useMemo(() => {
    console.log("Calculating total...");

    return cart.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [cart]);

  return (
    <div>
      <h2>Total Price: ${totalPrice}</h2>

      <button onClick={() => setCount(count + 1)}>
        Click: {count}
      </button>
    </div>
  );
}

export default App;