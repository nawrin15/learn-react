function Path() {
    return (
        <svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,100 L150,150 L150,200 
                    A50,50 0 1,1 100,150 
            "//L-line M-move (A-Arc Arc_radius_x-axis,Arc_radius_y-axis x-axis_rotation large_arc_flag,swift_arc_flag)
                style={{
                    stroke: "#ff0000",
                    strokeWidth: "3",
                    fill: "none"
                }}
            />
            <path d="M200,200 L250,250 L250,300 
                    A50,50 0 1,0 200,250 
            "//L-line M-move (A-Arc Arc_radius_x-axis,Arc_radius_y-axis x-axis_rotation large_arc_flag,swift_arc_flag)
            //l,a,q - relative (relative to last endpoint)
            //L,A,Q - Absolute
            
                style={{
                    stroke: "#ff0000",
                    strokeWidth: "3",
                    fill: "none"
                }}
            />
            <path d="M300,300 L350,350 L350,400 
                    A50,50 0 0,0 300,350
                    Q250,400 400,500
                    z 
            "//L-line M-move (A-Arc Arc_radius_x-axis,Arc_radius_y-axis x-axis_rotation large_arc_flag,swift_arc_flag)
            //Q-quadratic control_points endpoints(x,y)
                style={{
                    stroke: "#ff0000",
                    strokeWidth: "3",
                    fill: "none"
                }}
            />
            <circle cx="250" cy="400" r="3"
                style={{
                    strokeuWidth: "3",
                    fill:"#0000ff"

                }}
            ></circle>
            <path d="M600,600 l50,0 l0,50 l-50,0 l0,-50 z"
            //L-line M-move (A-Arc Arc_radius_x-axis,Arc_radius_y-axis x-axis_rotation large_arc_flag,swift_arc_flag)
            //Q-quadratic control_points endpoints(x,y)
            //C- curve - control_points control_points endpoints(x,y)
            //z-set -close the line -join first and last point
                style={{
                    stroke: "#ff0000",
                    strokeWidth: "3",
                    strokeDasharray: "10,5",
                    fill: "#660003",
                    fillOpacity: "0.4"
                }}
            />
        </svg>
     
    );
  }
  
  export default Path;