function Rect() {
    return (
      <svg >
       <rect 
            x="10" 
            y="10" 
            height="100" 
            width="100" 
            rx="10" 
            ry="10"
            style= {{
                stroke: "#990000",
                fill: " none",
                strokeWidth: "2",
                strokeDasharray: "10 8"
            }}
        />
        <rect 
            x="30" 
            y="30" 
            height="100" 
            width="100" 
            rx="10" 
            ry="10"
            style= {{
                stroke: "#990000",
                fill: "#ff0000",
                strokeWidth: "2",
                strokeDasharray: "10 8",
                fillOpacity: "0.5"
            }}
        />
      </svg>
     
    );
  }
  
  export default Rect;