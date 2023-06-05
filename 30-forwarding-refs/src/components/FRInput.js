import React from "react";

// const FRInput = () => {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   );
// };

// 3. use `React.forwardRef` to allow the parent component to directly reference the input element (in the child component)
// 3. ref parameter is passed as a second parameter to the function component
const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      {/* 4. attach the ref to the input element in the child component */}
      <input type="text" ref={ref} />
    </div>
  );
});

export default FRInput;
