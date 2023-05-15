// import React from "react";

// const Greet = () => {
//   return <h1>Hello Suji</h1>;
// };

// export default Greet;
// // this allows us to import the component with any name

// named export
// you have to import the component with the exact same name
import React from "react";

export const Greet = (props) => {
  console.log(props);
  // {props.name} to evaluate the JSX expression
  return (
    <h1>
      ⭐ Hello {props.name}, you love {props.favorite}
      {/* sometimes, you might not have an idea as to what content is being passed in 
      so, to render the unknown content of the component, we can specify {props.children} */}
      {props.children}
    </h1>
  );
};
