import React from "react";
import ReactDOM from "react-dom";
import Cards from './Cards';
import "./index.css";




ReactDOM.render(
  <>
  <h1 className="heading_style">List Of Netflix Movies/Series to watch</h1>
<Cards imgsrc="https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_.jpg"link="https://www.netflix.com/in/title/80991034"title="VENOM">
  </Cards>
  <Cards imgsrc="https://m.media-amazon.com/images/I/81y0foYjoFL._AC_UF1000,1000_QL80_.jpg"link="https://www.netflix.com/in/title/81465707"title="SPIDERMAN NO WAY HOME">
  </Cards>
  <Cards imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs6ZsvAQl-hnJczhk5MwiOKWzEw3oxLOH-zA&s"link="https://www.netflix.com/in/title/81488262"title="choose or die">
  </Cards>
  </>
  ,document.getElementById("root")
);
