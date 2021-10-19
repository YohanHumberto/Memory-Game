import { useEffect, useState } from 'react';
import angular from '../img/angular.png';
import css from '../img/css.png';
import html from '../img/html.png';
import vue from '../img/vue.png';
import flutter from '../img/flutter.png';
import js from '../img/js.png';
import git from '../img/git.png';
import node from '../img/node.png';
import pyton from '../img/python.png';
import php from '../img/php.png';
import cuadro from '../img/square.svg';

let ArrImg = [angular, css, html, vue, flutter, js, git, node, pyton, php, angular, css, html, vue, flutter, js, git, node, pyton, php];
const ArrScuare = [cuadro, cuadro, cuadro, cuadro, cuadro, cuadro, cuadro, cuadro, cuadro, cuadro, cuadro, cuadro, cuadro, cuadro, cuadro, cuadro, cuadro, cuadro, cuadro, cuadro];



function useMemoryGame() {

    const [ArrImagenesURL, setArrImagenesURL] = useState(ArrScuare);
    const [state, setState] = useState(true);
    const [Switches, setSwitches] = useState(true)
    const [Estado, setEstado] = useState('Jugando');
    const [Intentos, setIntentos] = useState(20)
    const [ClickIndex1, setClickIndex1] = useState(null)
    const [ClickIndeseado, setClickIndeseado] = useState(true)
    const [contador, setcontador] = useState(1)
    let cudroElemento = cuadro;

    useEffect(() => {
        ArrImg.sort(() => Math.random() - 0.5)
        console.log('UseEffect')
    }, [])

    const MostrarItem1 = (index) => {
        if (Intentos > 0) {
            if (ArrImagenesURL[index] === cudroElemento) {
                setSwitches(false);
                setClickIndex1(index);
                ArrScuare.splice(index, 1, ArrImg[index])
                setArrImagenesURL(ArrScuare);
                setState(!state);
            }
        }
    }

    const MostrarItem2 = (index) => {
            if (ArrImagenesURL[index] === cudroElemento) {

                setClickIndeseado(false);
                setSwitches(true);
                
                setIntentos(Intentos - 1);

                if (ArrImagenesURL[ClickIndex1] === ArrImg[index]) {
                    ArrScuare.splice(index, 1, ArrImg[index])
                    setArrImagenesURL(ArrScuare);
                    setcontador(contador + 1)
                    setState(!state);

                    console.log(contador)

                    setClickIndeseado(true);
                    setIntentos(Intentos - 1);

                    if (contador === 10) {
                        alert('GANASTE ')
                        setEstado("GANASTE");
                        setState(!state);
                    }
                } else {
                    ArrScuare.splice(index, 1, ArrImg[index])
                    setArrImagenesURL(ArrScuare);
                    setState(!state);

                    setTimeout(() => {
                        ArrScuare.splice(index, 1, cudroElemento);
                        ArrScuare.splice(ClickIndex1, 1, cudroElemento);
                        setArrImagenesURL(ArrScuare);
                        setState(!state);

                        setClickIndeseado(true);
                    }, 1000);
                }

                if (Intentos <= 1) {
                    setEstado("PERDISTE");
                    setState(!state);
                }

            }
    }

    const volverAJugar = () => {
        ArrImg.sort(() => Math.random() - 0.4)
        setcontador(0);
        setSwitches(true);
        setClickIndex1(null);
        setClickIndeseado(true);
        setIntentos(20);
        setEstado("Jugando");
        ArrScuare.forEach((el, i) => ArrScuare[i] = cudroElemento);
        setArrImagenesURL(ArrScuare);
        setState(!state);
    }

    const Decicion = (index) => {
        ClickIndeseado ? Switches ? MostrarItem1(index) : MostrarItem2(index) : setClickIndeseado(false)
    }


    return (
        {
            Intentos,
            Estado,
            ArrImagenesURL,
            volverAJugar,
            Decicion,
        }
    )
}

export default useMemoryGame;
