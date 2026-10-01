import React, { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data.slice(0, 3));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>User List</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h2>Name: {user.name}</h2>
          <p>Phone Number: {user.phone}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default App;
