import React from "react";

const ListRenderingFunction = () => {
  const names = ["Sujeong", "Minji", "Lucky", "Lucky"];
  return (
    <div>
      {names.map((name, index) => (
        <Person key={index} name={name} />
      ))}
    </div>
  );
};

const Person = ({ name }) => {
  return <h4>{name}</h4>;
};

export default ListRenderingFunction;
