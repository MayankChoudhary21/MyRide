import React, { createContext, useState } from "react";

// Create the context
export const UserContext = createContext(null);

// Define the provider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Ensure it's a default export
export default UserProvider;
