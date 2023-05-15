import "./styling.css";

const Styling = (props) => {
  const className = props.primary ? "primary" : "";
  return (
    <div>
      <h4 className="primary">styling</h4>
      <h4 className={className}>styling</h4>
      <h4 className={`${className} font-xl`}>styling</h4>
    </div>
  );
};

export default Styling;
