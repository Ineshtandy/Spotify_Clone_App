import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

//children is what is inside datalayer in index.js
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//anytime i wanna add something to the data layer or dispatch an action to it, we need the access to the data layer
//to get that access we use this
export const useStateValue = () => useContext(StateContext);
