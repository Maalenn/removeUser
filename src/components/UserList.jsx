import userData from "../data.js";
import { useState } from "react";

const UserList = () => {
  const [user, setUser] = useState(userData);

  const handleClear = () => setUser([]);

  const handleRemove = (id) => {
    const filterUser = user.filter((pp) => pp.id !== id);
    setUser(filterUser);
  };

  const handleReset = () => {
    setUser(userData);
  };

  return (
    <div className="container">
      {user.map(({ id, img, name, age }) => (
        <article key={id}>
          <img src={img} alt="" />
          <h2>{name}</h2>
          <h2>{age}</h2>
          <button onClick={() => handleRemove(id)}>Remove</button>
        </article>
      ))}
      {user.length === 0 ? (
        <button onClick={handleReset}>Reset All</button>
      ) : (
        <button onClick={handleClear}>Clear All</button>
      )}
    </div>
  );
};

export default UserList;
