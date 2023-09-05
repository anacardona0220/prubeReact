import React from 'react'

const Parrafo2 = () => {
  return (
    <div className='container-parte4-1'>
      <h1 className='title-parrfo2'>Piezas del cubo de rubik</h1>
      <div>
        <p className='parrafo2'>
        En primer lugar, debemos conocer los diferentes tipos de piezas que forman los cubos de rubik. En el caso del 3x3, al igual que en todos los demás, está compuesto por tres tipos de piezas bien diferenciadas: centros, aristas y esquinas. Tenemos que tener claro que cada tipo de pieza solo puede estar en su posición. Es decir, por muchos movimientos que hagamos, nunca podremos poner una esquina en la posición de una arista.<br/>
        <br/>
        Centros: los centros de un cubo de rubik son piezas que nunca se mueven, es decir, no varían su posición. Éstos están fijos en el centro de cada cara y marcan el color de la misma. Cada cubo tiene 6 centros.<br/>
        <br/>
        Aristas: el cubo 3x3 tiene 12 aristas. Se sitúan entre los vértices y están formadas por dos colores.<br/>
        <br/>
        Esquinas: tendremos un total de 8 esquinas y cada una se compone de tres colores diferentes.
        </p>
      </div>
    </div>
  )
}

export default Parrafo2
