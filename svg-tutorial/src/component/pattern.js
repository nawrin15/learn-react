function Patterns() {
    return (
      <svg width="800" height="800">
        <defs>
            <g id="shapes">
                <rect x="50" y="50" width="50" height="50" style={{stroke: "none", fill: "#000", fillOpacity: 1}}/>
                <circle r="50" cx="50" cy="50" />
                <line x1="50" y1="50" x2="100" y2="100" stroke="#080" strokeWidth="5"/>
            </g>
            <g id="shapes3">
                <rect x="50" y="50" width="50" height="50" style={{stroke: "none", fill: "#f28", fillOpacity: 1}}/>
                <circle r="50" cx="50" cy="50" fill="#f28"/>
                <line x1="50" y1="50" x2="100" y2="100" stroke="#080" strokeWidth="5"/>
            </g>
        </defs>
        {/* <use xlink:href="#shapes" x="100" y="100" /> */}
        <use xlinkHref="#shapes" x="100" y="100"/>
        <use xlinkHref="#shapes" x="200" y="100" fill="#f50"/>
        <use xlinkHref="#shapes3" x="300" y="100" fill="#f50"/>
        <g id="shapes2" x="400" y="400">
            <circle r="50" cx="400" cy="400" style={{
            stroke: "blue", 
            fill: "red",
            fillOpacity: 1
  
          }}/>
        </g>
        <use href="#shapes2" x="300" y="300" />
      </svg>
     
    );
  }
  
  export default Symbol;