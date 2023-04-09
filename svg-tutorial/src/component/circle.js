function Circle() {
    return (
      <svg width="200" height="200">
        <circle cx="60" cy="60" r="50"
          style={{
            stroke: "#006600", 
            fill: "#00cc00",
            strokeDasharray: "10 5",
            strokeWidth: "5"
  
          }}
        >
          </circle>
          <circle cx="100" cy="60" r="50"
          style={{
            stroke: "#660000", 
            strokeOpacity: "0.5",
            fill: "#cc0000",
            strokeWidth: "5",
            fillOpacity: "0.4"
  
          }}
        >
          </circle>
      </svg>
     
    );
  }
  
  export default Circle;