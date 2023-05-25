const heading = {
  fontSize: "80px",
  color: "lightblue",
};

const InlineCSS = () => {
  return <div style={heading}>InlineCSS</div>;

  // CSS Modules test
  {
    /* Normal CSS Stylesheets - applied in the Child Component */
  }
  <div className="error">Error</div>; // working
  {
    /* CSS Modules - not applied in the Child Component*/
  }
  // <div className={styles.success}>Success</div>; // not working
};

export default InlineCSS;
