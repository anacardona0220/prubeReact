import React from "react";

const Parrafo3 = () => {
  return (
    <div className="container-parte4-4">
      <div>
        <p className="parrafo3">
          Como hemos comentado al principio de este tutorial, en el método para
          resolver un cubo de rubik 3x3 para principiantes, haremos una
          resolución por capas. Estos cubos se componen de tres capas: superior,
          central e inferior. Vamos a conocer brevemente lo que tenemos que
          hacer en cada una de ellas.<br />
          <br />
          En la capa superior (que normalmente comenzamos por la cara blanca,
          aunque se puede comenzar por cualquier otra) tenemos que hacer primero
          la cruz y después meter las esquinas en su posición correcta.<br
          />{" "}
          <br />
          En la capa central tendremos que buscar las aristas que van en esta
          capa y mediante un sencillo algoritmo, colocarlas en su posición
          correcta.<br />
          <br />
          En la última capa del cubo de rubik tendremos que repetir el proceso
          que hemos hecho en la primera capa, pero ejecutando una serie de
          algoritmos para no desmontar la parte que ya tenemos hecha.
        </p>
      </div>
    </div>
  );
};

export default Parrafo3;
