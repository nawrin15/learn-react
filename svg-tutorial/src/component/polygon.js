function Polygon() {
    return (
      <svg width="500" height="500">
        <polygon points="100,100 200,100 200,200 100,200"
          style={{
            stroke: "#ff0000", 
            fill: "none",
            strokeDasharray: "10 15", //dashcount, dashspace
            strokeWidth: "5"
  
          }}
        >
          </polygon>
          <polygon points="120,120 220,120 220,220 120,220"
          style={{
            stroke: "#0000ff", 
            fill: "#ff0000",
            strokeWidth: "5",
            strokeOpacity: "0.4",
            fillOpacity: "0.4"
  
          }}
        ></polygon>
      </svg>
     
    );
  }
  
  export default Polygon;