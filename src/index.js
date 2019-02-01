import React, { useState } from "react";
import ReactDOM from "react-dom";
import BookingForm from "./BookingForm";

import "./styles.css";

function App() {
  const [skin, setSkin] = useState("default");
  function onChangeSkin(e) {
    setSkin(e.target.value);
  }
  return (
    <>
      <div className="App">
        <BookingForm skin={skin} />
      </div>
      <form>
        <label>Change skin</label>
        <br />
        <label for="default">Default</label>
        <input
          type="radio"
          id="default"
          name="skin"
          value="default"
          checked={skin === "default" ? true : false}
          onChange={onChangeSkin}
        />
        <label for="flat">Flat</label>
        <input
          type="radio"
          id="flat"
          name="skin"
          value="flat"
          checked={skin === "flat" ? true : false}
          onChange={onChangeSkin}
        />
      </form>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
