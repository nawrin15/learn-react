function Text1() {
    return (
      <>
        <div>
          <svg width="1200" height="70" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{"backgroundColor": "red"}}>
            <line x1="10" y1="15" x2="15" y2="15" stroke="#000"/>
            <text x="10" y="10" text-anchor="start">SVG text</text>
          </svg>
        </div>
        <div>
          <svg width="1200" height="70"viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{"backgroundColor": "red"}}>
            <text x="10" y="10" text-anchor="middle">SVG text</text>
            <line x1="10" y1="15" x2="15" y2="15" stroke="#000"/>
          </svg>
        </div>
        <div>
          <svg width="1200" height="70"viewBox="0 0 20 20" style={{"backgroundColor": "red"}} xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="10" textAnchor="end" >SVG text Anchor</text> 
            <line x1="10" y1="15" x2="15" y2="15" stroke="#000"/>
          </svg>
        </div>
        <div>
          <svg width="1200" height="70"viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="10" fill="none" stroke="#000" textAnchor="end" >SVG text Anchor</text> 
          </svg>
        </div>
        <div>
          <svg width="1200" height="70"viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="10" fill="red" stroke="green" textAnchor="end" >SVG text Anchor</text> 
          </svg>
        </div>
        <div>
          <svg width="200" height="200"viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="10" writingMode="tb" >SVG writing Mode</text> 
          </svg>
        </div>
        <div>
          <svg width="200" height="200" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="10" textLength="50" >text Length</text> 
            <text x="100" y="10" textLength="40" >text Length</text> 
          </svg>
        </div>
        <div>
          <svg width="400" height="400">
            <text x="20" y="100" >
                <tspan>text span 1</tspan>
                <tspan dy="20 10 40 35 20">text span 2</tspan>
            </text>
          </svg>
        </div>
        <div>
          <svg width="400" height="400">
            <text x="20" y="100" >
                <tspan>text span 1</tspan>
                <tspan dx="20 10 40 35 20">text span 2</tspan>
            </text>
          </svg>
        </div>
        <div>
          <svg width="400" height="400">
            <text x="20" y="100" >
                <tspan baselineShift="sub">text span 1</tspan>
                <tspan>text span 2</tspan>
                <tspan style={{"baseline-shift":"super"}}>text span 3</tspan>
                <tspan>text span 4</tspan>
            </text>
          </svg>
        </div>
        <div>
          <svg width="400" height="400">
            <path id="path1" d="M100,50 H200,50 c250,50 300,50" style={{
                    stroke: "#ff0000",
                    strokeWidth: "3",
                    fill: "none"
                }}/>
                <text>
                  <textPath href="#path1">this is line tezzxt</textPath>
                </text>
          </svg>
        </div>
      </>
    
     
    );
  }
  
  export default Text1;