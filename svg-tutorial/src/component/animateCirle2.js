function AnimateCircle2() {
    return (
      <>
      <svg viewBox="0 0 400 400" width="400" height="400">
          <foreignObject x="20" y="20" width="100" height="100">  
            <span>I am outsider</span>
          </foreignObject>
          <circle className="animate-circle" cx="10" cy="10" r="10"/> 
      </svg>
     </>
    );
  }
  
  export default AnimateCircle2;