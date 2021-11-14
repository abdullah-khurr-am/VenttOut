import { useState } from "react";
import "../styles/Button.css";

const Button = ({icontext,image}) => {
  return (
    <div id="button" onClick="()">
      <div id="button-content">
        <img src={image} alt="" width="20px" height="20px" />
        <p>{icontext}</p>
      </div>
    </div>
  );
};


const Filters = () => {
  const [Activated,SetActivated] = useState("MostLiked");
  return ( 
    <div className="filter">
      <div className={Activated === "MostLiked"?"filterbutton active":"filterbutton"} id="MostLiked" onClick={(e)=>{SetActivated(e.target.id);}}>Most Liked</div>
      <div className={Activated === "Trending"?"filterbutton active":"filterbutton"} id="Trending" onClick={(e)=>{SetActivated(e.target.id);}}>Trending</div>
      <div className={Activated === "Fresh"?"filterbutton active":"filterbutton"} id="Fresh" onClick={(e)=>{SetActivated(e.target.id);}}>Fresh</div>
    </div>
   );
}
 

export {Button,Filters};
