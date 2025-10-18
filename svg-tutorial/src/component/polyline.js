function Polyline() {
    return (
    <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <polyline points="10,10 20,10 15,15" 
          style={{
            stroke: "#ff0000",
            fill: "none"
          }}
        />
        <polyline points="40,40 80,60 90,90 40,40" 
          style={{
            stroke: "#ff0000",
            strokeWidth: "2",
            strokeDasharray: "20 2",
            fill: "#ff0000",
            fillOpacity: "0.3"
          }}
        />
        
      </svg>
     
    );
  }
  
  export default Polyline;