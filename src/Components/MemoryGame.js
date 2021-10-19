import { Fragment } from 'react';
import useMemoryGame from '../Hooks/useMemoryGame';
import '../style.css'

function MemoryGame() {
    const { Intentos, Estado, ArrImagenesURL, Decicion, volverAJugar } = useMemoryGame();

    return (
        <Fragment>
            <div id="app">
                <div className="containerButton">
                    <button onClick={volverAJugar}>REINICIAR</button>
                </div>
                <div className="containerEstado">
                    <h1>
                        INTENTOS: <span>{Intentos}</span>
                    </h1>
                    <h1>
                        ESTADO: <span>{Estado}</span>
                    </h1>
                </div>
                <div id="container" className="container">
                    {
                        ArrImagenesURL.map((item, index) => {
                            return (
                                <div className="divimg" onClick={() => Decicion(index)} key={index}>
                                    <img className="img" src={item} alt="ficha" key={index} />
                                </div>

                            );
                        })
                    }
                </div>
            </div >
        </Fragment>
    )
}

export default MemoryGame
