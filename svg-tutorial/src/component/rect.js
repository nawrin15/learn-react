function Rect() {
    return (
      <>
      <svg width="350" height="350">
        <rect x="100" y="100" width="200" height="200" fill="#0f7" stroke="#f0f" strokeWidth="4" rx="100" ry="100"/>
        <rect x="10" y="10" width="200" height="200" fill="#0f0" stroke="#00f" strokeWidth="4" rx="100" ry="200"/>
        </svg>
        <svg width="350" height="350">
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
      </>
     
    );
  }
  
  export default Rect;