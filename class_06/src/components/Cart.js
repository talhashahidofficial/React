import React from "react";

function Cart() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">

        <h1 className="text-3xl font-bold mb-8">
          Shopping Cart
        </h1>

        <div className="bg-white p-8 rounded-lg shadow text-center">
          <p className="text-gray-500">
            Your cart is empty.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Cart;
