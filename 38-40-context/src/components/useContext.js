import React from "react";

// 1. Create a context object
const UserContext = React.createContext();
// 2. Create a provider component
const UserProvider = UserContext.Provider;
// 3. Create a consumer component
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
