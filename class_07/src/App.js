import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
function ProductList() {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/users') 
      .then(response => {
        
        setProducts(response.data); 
      })
      .catch(error => {
        
        console.log('Koi error aa gaya:', error);
      });
  }, []); 

  return (
    <div>
      <h2>Godown se aaye hue Products:</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;