import { useEffect, useState } from "react";
import { get } from "superagent";
import compareData from "./compareData.js";

function App() {
  const [inputText, setinputText] = useState();
  const [tempcompareText, settempcompareText] = useState();
  const [refresh, setrefresh] = useState(false);

  useEffect(() => {
    getRandomPara(settempcompareText);
  }, [refresh]);

  return (
    <>
      <div className="main-container">
        <p id="compareText" rows="10" cols="110" className="template-data">
          {tempcompareText}
        </p>
        <textarea
          id="inputText"
          rows="10"
          cols="110"
          className="input-data"
          onChange={(e) => {
            setinputText(e.target.value);
            compareData(tempcompareText);
          }}
        ></textarea>
        <div className="relative py-80">
          <button
            className="btn-refresh"
            onClick={() => {
              setrefresh(!refresh);
              setinputText("");
              document.getElementById("inputText").value = "";
            }}
          >
            Refresh
          </button>
        </div>
      </div>
    </>
  );
}

function getRandomPara(settempcompareText) {
  get("http://metaphorpsum.com/sentences/3").end((err, res) => {
    if (res.status === 200) {
      settempcompareText(res.text);
    } else {
      settempcompareText("");
    }
  });
}
export default App;
