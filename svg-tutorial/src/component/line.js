function Line() {
    return (
      <svg width="700" height="700">
        <line x1="10" y="10" x2="200" y2="100"
          style={{
            stroke: "#ff0000", 
            fill: "#none",
            strokeDasharray: "10 15", //dashlength, dashspace
            strokeWidth: "5"
  
          }}
        >
          </line>
          <line x1="110" y1="200" x2="20" y2="100"
          style={{
            stroke: "#0000ff", 
            fill: "#none",
            strokeWidth: "5",
            strokeOpacity: "0.4"
  
          }}
        ></line>
        {/* stoke-line */}
        <line x1="310" y1="310" x2="450" y2="310" strokeLinecap="butt"
          style={{
            stroke: "#0000ff", 
            fill: "#none",
            strokeWidth: "5",
            strokeOpacity: "0.4"
  
          }}
        ></line>
        <line x1="310" y1="330" x2="450" y2="330" strokeLinecap="square"
          style={{
            stroke: "#0000ff", 
            fill: "#none",
            strokeWidth: "5",
            strokeOpacity: "0.4"
  
          }}
        ></line>
        <line x1="310" y1="350" x2="450" y2="350" strokeLinecap="round"
          style={{
            stroke: "#0000ff", 
            fill: "#none",
            strokeWidth: "5",
            strokeOpacity: "0.4"
  
          }}
        ></line>
        {/* strokedash-array */}
        <line x1="310" y1="390" x2="490" y2="390"
          style={{
            stroke: "#0000ff", 
            fill: "#none",
            strokeWidth: "5",
            strokeOpacity: "0.4"

          }}
          strokeDasharray="5 10 15"
        ></line>
        {/* stoke-linejoin */}
        <path d="M550 400 L600 350 L650 400" fill="none" strokeWidth="5" stroke="#f50" strokeLinejoin="miter"/>
        <path d="M550 500 L600 450 L650 500" fill="none" strokeWidth="5" stroke="#f50" strokeLinejoin="round"/>
        <path d="M550 600 L600 550 L650 600" fill="none" strokeWidth="5" stroke="#f50" strokeLinejoin="bevel"/>
        <path  class="path" fill="white" stroke="black" stroke-width="4" strokeDasharray ="1000" strokeDashoffset="1000"
        d="M66.039,133.545c0,0-21-57,18-67s49-4,65,8
  s30,41,53,27s66,4,58,32s-5,44,18,57s22,46,0,45s-54-40-68-16s-40,88-83,48s11-61-11-80s-79-7-70-41
  C46.039,146.545,53.039,128.545,66.039,133.545z"/>
      </svg>
     
    );
  }
  
  export default Line;