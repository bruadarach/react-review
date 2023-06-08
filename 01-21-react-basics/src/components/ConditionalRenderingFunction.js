const ConditionalRenderingFunction = () => {
  const isLoggedIn = false;

  // Terinary Operator : `Wecome Sujeong Ji` or `Welcome Guest`
  //   return <div>Welcome {isLoggedIn ? "Sujeong Ji" : "Guest"}</div>;
  // Short Circuit Operator : `Welcome` or `Welcome Sujeong Ji`
  return <div>Welcome {isLoggedIn && "Sujeong Ji"}</div>;
};

export default ConditionalRenderingFunction;
