import React, { useEffect } from "react";

function HookMouse() {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    // This is the equivalent of componentDidMount()
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    // This is the equivalent of componentWillUnmount()
    return () => {
      console.log("Component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
