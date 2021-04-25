import { useContext, createContext } from "react";

const usersContext = createContext([]);

function useUsers() {
    return useContext(usersContext);
  }

export {usersContext, useUsers}