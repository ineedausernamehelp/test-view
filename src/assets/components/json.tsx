import React, { ReactInstance, useRef } from "react";
import { useEffect, useState } from "react";
import { ReactToPrint, useReactToPrint } from "react-to-print";

function JSONViewer() {
  const [jsonData, setJsonData] = useState<string[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    try {
      const parsedJson = JSON.parse(inputValue);
      if (Array.isArray(parsedJson)) {
        var inputValue2 = inputValue.replace("{", "");
        var inputValue2 = inputValue2.replace("[", "");
        var inputValue2 = inputValue2.replace("]", "");
        var inputValue2 = inputValue2.replace("}", "");

        var inputArray = inputValue2.split(",");

        setJsonData(inputArray);
      } else {
        setJsonData(["niet een json"]);
      }
    } catch (error) {
      setJsonData(["niet een json"]);
    }
  };

//   const [content, setContent] = useState<React.ReactNode[] | undefined>();
  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
    pageStyle: "",
    

  })
//   const addContent = (data: string[]) => {
//     const newContent = data.map((item, index) => (
//         <div className="json-item" key={index}>
//             <p>{item}</p>
//         </div>
//     ));
//     setContent(newContent);
// };



  return (
    <>
        <button onClick={() => {
        handlePrint(null, () => contentToPrint.current);
      }}>Print using a Functional Component</button>

       <input type="text" onChange={handleSearch} />
      <table className="label" ref={contentToPrint}>
        {jsonData.map((item, index) => (
          <div className="table-styling" key={index}>
            {typeof item === "object" ? (
              <pre>{JSON.stringify(item, null, 2)}</pre>
            ) : (
              <td className="json-row">
                {item.split(":").map((item, index) => (
                  <span className="json-item" key={index}>
                    <p>{item}</p>
                  </span>
                ))}
              </td>
            )}
          </div>
        ))}
      </table>
    </>
  ); 
}

export default JSONViewer;
