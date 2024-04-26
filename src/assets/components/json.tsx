import { useEffect, useState } from "react";

function JSONViewer() {
    const [jsonData, setJsonData] = useState<string[]>([]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        try {
            const parsedJson = JSON.parse(inputValue);
            if (Array.isArray(parsedJson)) {
                var inputValue2 =  inputValue.replace('{' , '');
                var inputValue2 =  inputValue2.replace('[' , '');
                var inputValue2 =  inputValue2.replace(']' , '');
                var inputValue2 =  inputValue2.replace('}' , '');


                var inputArray = inputValue2.split(',');
                setJsonData(inputArray);
            } else {
                setJsonData(['niet een json']);
            }
        } catch (error) {
            setJsonData(['niet een json']);
        }
    };

    return (
        <>
            <input type="text" onChange={handleSearch} />
            <div>
                {jsonData.map((item, index) => (
                    <div className="table-styling" key={index}>
                        {typeof item === "object" ? (
                            <pre>{JSON.stringify(item, null, 2)}</pre>
                        ) : (
                            <span className="json-row">{item.split(':').map((item,index) => (
                                <div className="json-item" key={index}>
                                    <p>{item}</p>
                                </div>
                            ))}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default JSONViewer;
