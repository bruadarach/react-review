const EventHandling = () => {
  const clickHandler = () => {
    console.log("Button Clicked");
  };

  const clickHandlerAdvanced = (event, count) => {
    console.log("Button Clicked", event, count);
  };

  return (
    <div>
      {/* // render after clicking */}
      <button onClick={clickHandler}>Click</button>
      {/* <button onClick={clickHandler}>Click</button> // render before clicking */}
      <button onClick={(event) => clickHandlerAdvanced(event, 5)}>
        Click More
      </button>
    </div>
  );
};

export default EventHandling;
