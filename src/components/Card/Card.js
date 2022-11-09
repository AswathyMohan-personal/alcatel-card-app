import React from "react";
import "./Card.scss";

const Card=({userValues})=>{

  return (
    <div className="card-parent">          
        <div className="item-holder">
          <label>Name</label>
          <div className="item">{userValues.userName}</div>
        </div>
        <div className="item-holder">
          <label>Age</label>
          <div className="item">{userValues.age}</div>
        </div>
        <div className="item-holder">
          <label>Ph No</label>
          <div className="item">{userValues.phoneNo}</div>
        </div>
    </div>
  );
}

export default Card;
