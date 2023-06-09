import React from "react";

// 1. Create a context object
const UserContext = React.createContext("Deafult Value");
// 2. Create a provider component
const UserProvider = UserContext.Provider;
// 3. Create a consumer component
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
// context type 1 : export default UserContext;
export default UserContext;
