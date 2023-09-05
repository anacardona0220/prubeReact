import React from 'react'
import Cubo4 from './Cubo4'
import Parrafo1 from './Parrafo1'

const Parte3 = ({datos}) => {
    return (
        <div className='grupo-imagen-parrafo1'>
            <div className="box">
                <Cubo4 />
            </div>
            <div className="box">
                <Parrafo1 datos = {datos} />
            </div>
        </div>
    )
}

export default Parte3
