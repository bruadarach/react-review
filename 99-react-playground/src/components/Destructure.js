import React from "react";

const Destructure = ({ name, favorite, children }) => {
  return (
    <h1>
      ⭐ Hello {name}, you love {favorite}
      {children}
    </h1>
  );
};

// const Destructure = (props) => {
//   const { name, favorite, children } = props;
//   return (
//     <h1>
//       ⭐ Hello {name}, you love {favorite}
//       {children}
//     </h1>
//   );
// };

export default Destructure;
