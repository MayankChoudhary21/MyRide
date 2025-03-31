import React, { createContext, useState } from "react";

// Create the User Context
export const UserContext = createContext(null);

// UserProvider Component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
