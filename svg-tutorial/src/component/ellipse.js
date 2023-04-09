function Ellipse() {
    return (
    <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="50" rx="40" ry="20" 
          style={{
            stroke: "#ff0000",
            fill: "none"
          }}
        />
        <ellipse cx="130" cy="80" rx="20" ry="20" 
          style={{
            stroke: "#ff0000",
            strokeDasharray: "10 10",
            strokeWidth: "2",
            fill: "#6666ff",
            fillOpacity: "0.4"
          }}
        />
      </svg>
     
    );
  }
  
  export default Ellipse;