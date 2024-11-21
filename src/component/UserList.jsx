import User from "./User";
import userData from "../data.js";
import { useState } from "react";

const UserList = () => {
  const [user, setUser] = useState(userData);

  const getUserId = (id) => {
    const filterUser = user.filter((pp) => pp.id !== id);
    setUser(filterUser);
  };

  const handleClear = () => setUser([]);

  return (
    <div className="container">
      {user.map((p) => (
        <User {...p} key={p.id} getId={getUserId} />
      ))}
      <button onClick={handleClear}>Clear All</button>
    </div>
  );
};

export default UserList;
