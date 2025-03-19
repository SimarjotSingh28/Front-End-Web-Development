import React from "react";





function Cards(props){
  return(
    <>
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc}
          alt="pic1"
          className="cardimg"
        ></img>
        <div className="cardinfo">
          <span className="cardacategory">A netflix Original film</span>
          <h3 className="cardtitle">{props.title}</h3>
          <a href={props.link}>
            <button> WATCH NOW</button>
          </a>
        </div>
      </div>
    </div>
    </>

  )

}

export default Cards;