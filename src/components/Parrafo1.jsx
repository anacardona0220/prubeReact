 

const Parrafo1 = ({datos}) => {
    return (
        <div className='p1'>
            <h1 className='title-header2'>{datos.subtitle}</h1>
            <div className='containerparrafo1'>
                <p>{datos.subtitleDescription}</p>
                <br />
                <p>{datos.subtitleDescription}</p>
                <br />
                <p>{datos.subtitleDescription}</p>
                
            </div>
            <div className='container-botones'>
            <button className="btn">{datos.button1}</button>
            <button className="btn">Enviar</button>
            <button className="btn">Enviar</button>
            </div>
        </div>
    )
}

export default Parrafo1
