// rfce

import React from "react";

function Columns() {
  const items = [];

  return (
    // 3. React.Fragment can be replaced with <></>
    // 3. However, <></> cannot have a key attribute
    <>
      {/* 1. An error will occur if you try to use <div> instead of <React.Fragment>: */}
      {/* 1. This is because <div> cannot be a child of <tr> */}
      {/* <div> */}
      {/* <React.Fragment> */}

      {/* 2. React.Frangment can have a key attribute */}
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))}

      <td>Name</td>
      <td>Sujeong</td>
      {/* </div> */}
      {/* </React.Fragment> */}
    </>
  );
}

export default Columns;
