import { useEffect, useRef } from "react";

function DeepTree() {
    let text = "সেই সংখ্যাটি বছর বছর বাড়ছে। যেখানে বসবাস করেন সমাজের বিত্তবানদের একাংশ। সেই সংখ্যাটি বছর বছর বাড়ছে। যেখানে বসবাস করেন সমাজের বিত্তবানদের একাংশ। সেই সংখ্যাটি বছর বছর বাড়ছে। যেখানে বসবাস করেন সমাজের বিত্তবানদের একাংশ। সেই সংখ্যাটি বছর বছর বাড়ছে।";  
    const chunk = text.split(" ");
    const ref = useRef();
    // const onSelectToken = (event) => {
    //   console.log(annotationInfo);
    //   console.log(event.target.id);
    //   let node_id = event.target.id;
    //   if (selectedToken) {
    //     annotationInfo.push({
    //       id: selectedToken + "_" + node_id + " det",
    //       token_start: selectedToken,
    //       token_end: node_id,
    //       label: "compound",
    //     });
    //     setAnnotationInfo(annotationInfo);
    //     setSelectedToken(null);
    //   } else {
    //     setSelectedToken(node_id);
    //   }
    // };
    useEffect(() => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }, []);
    const row = chunk.map((value, key) => {

      return (
        <span
          key={key}
          style={{
            "border" : "2px solid black",
            "padding" : "5px",
            "display" : "inline-block"
          }}
          id={key.toString()}
          // onClick={(e) => onSelectToken(e)}
        >
          {value}
        </span>
      );
    });
    return (
      <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        <foreignObject x="0" y="50" width="1000" height="1000">
          <div 
            style={{
              "overflow-x": "scroll",
              "white-space": "nowrap",
            }}
            ref={ref}
          >
            {row}
          </div>
        </foreignObject>
      </svg>
    )
  }
  
  export default DeepTree;