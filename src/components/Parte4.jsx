import React from "react";
import Parrafo2 from "./Parrafo2";
import Botones2 from "./Botones2";
import Parrafo3 from "./Parrafo3";
import Image3 from "./Image3";

const Parte4 = ({datos}) => {
  return (
    <div className="container-parte4">
      <div className="box2">
        <Parrafo2 />
      </div>
      <div className="box2">
        <Botones2 />
      </div>
      <div className="box2">
        <Image3 datos = {datos}/>
      </div>
    </div>
  );
};



export default Parte4;
