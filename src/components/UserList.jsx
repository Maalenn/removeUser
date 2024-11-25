import userData from "../data.js";
import { useState, useReducer } from "react";

const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";

const initialState = {
  user: userData,
};

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, user: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, user: userData };
  }
  if (action.type === REMOVE_ITEM) {
    const filterUser = state.user.filter((pp) => pp.id !== action.payload.id);
    return { ...state, user: filterUser };
  }
  throw new Error(`CAN"T FIND ${action.type}`);
};

const UserList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClear = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const handleReset = () => {
    dispatch({ type: RESET_LIST });
  };
  
  const handleRemove = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };


  return (
    <div className="container">
      {state.user.map(({ id, img, name, age }) => (
        <article key={id}>
          <img src={img} alt="" />
          <h2>{name}</h2>
          <h2>{age}</h2>
          <button onClick={() => handleRemove(id)}>Remove</button>
        </article>
      ))}
      {state.user.length === 0 ? (
        <button onClick={handleReset}>Reset All</button>
      ) : (
        <button onClick={handleClear}>Clear All</button>
      )}
    </div>
  );
};

export default UserList;
