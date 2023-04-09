function Line() {
    return (
      <svg width="200" height="200">
        <line x1="10" y="10" x2="200" y2="100"
          style={{
            stroke: "#ff0000", 
            fill: "#none",
            strokeDasharray: "10 15", //dashcount, dashspace
            strokeWidth: "5"
  
          }}
        >
          </line>
          <line x1="110" y="200" x2="20" y2="100"
          style={{
            stroke: "#0000ff", 
            fill: "#none",
            strokeWidth: "5",
            strokeOpacity: "0.4"
  
          }}
        ></line>
      </svg>
     
    );
  }
  
  export default Line;