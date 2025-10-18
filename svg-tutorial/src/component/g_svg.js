function G_Svg() {
    return (
      <svg width="800" height="800">
        <g fill="#080" stroke="#080" style={{"strokeWidth": "6px"}}>
            <circle r="50" cx="50" cy="50" />
            <line x1="20" y1="20" x2="150" y2="120" stroke="#080" strokeWidth="5"/>
        </g>
      </svg>
     
    );
  }
  
  export default G_Svg;