import React from "react";

const FragmentFunctionColumns = () => {
  const items = ["Minji", "Lucky", "Deoqua"];
  return (
    // <div>
    // <React.Fragment>
    // <> => do not pass the `key` attribute
    <>
      <td>Name</td>
      <td>Sujeong Ji</td>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <td>{item}</td>
        </React.Fragment>
      ))}
    </>
    // </React.Fragment>
    // </div>
  );
};

export default FragmentFunctionColumns;
