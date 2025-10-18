function AnimateCircle4() {
    return (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="10" height="10">
          <animate
            attributeName="rx"
            values="0;5;0"
            dur="10s"
            repeatCount="indefinite" />
        </rect>
      </svg>
    );
  }
  
  export default AnimateCircle4;