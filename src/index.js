import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Data from "./Data";
import "./styles.css";

function cards(val){
  return(
    <Card
    imgsrc={val.imgsrc}
    title={val.title}
    para={val.para}
    link={val.link}
  />
  );
}

ReactDOM.render(
  <>
    <p className="heading">Heaven on Earth </p>
    {Data.map(cards)}
  </>,
  document.getElementById("root")
);
