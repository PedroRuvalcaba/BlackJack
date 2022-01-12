/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const miModulo = (() => {\n    'use strict'\n\n    let deck         = [];\n    const tipos      = ['C','D','H','S'],\n          especiales = ['A','J','Q','K'];\n\n    let puntosJugadores = [];\n\n    // Referencias del HTML\n    const btnPedir   = document.querySelector('#btnPedir'),\n          btnDetener = document.querySelector('#btnDetener'),\n          btnNuevo   = document.querySelector('#btnNuevo');\n\n    const divCartasJugadores = document.querySelectorAll('.divCartas'),\n          puntosHTML = document.querySelectorAll('small');\n\n\n\n    //Esta funcion inicializa el juego\n    const inicializarJuego = (numJugadores = 2) => {\n        deck = crearDeck();\n        puntosJugadores = [];\n        for (let i = 0; i < numJugadores; i ++) {\n            puntosJugadores.push(0);\n        }  \n        \n        puntosHTML.forEach(elem => elem.innerText = 0)\n        divCartasJugadores.forEach( elem => elem.innerHTML = '');\n\n        btnPedir.disabled   = false;\n        btnDetener.disabled = false;\n    }\n    \n    // Esta función crea un nuevo deck\n    const crearDeck = () => {\n\n        deck = [];\n\n        for( let i = 2; i <= 10; i++ ) {\n            for( let tipo of tipos ) {\n                deck.push( i + tipo);\n            }\n        }\n\n        for( let tipo of tipos ) {\n            for( let esp of especiales ) {\n                deck.push( esp + tipo);\n            }\n        }\n        return _.shuffle( deck );\n    }\n\n    // Esta función me permite tomar una carta\n    const pedirCarta = () => {\n\n        if ( deck.length === 0 ) {\n            throw 'No hay cartas en el deck';\n        }\n        return deck.pop();;\n    }\n\n    const valorCarta = ( carta ) => {\n        const valor = carta.substring(0, carta.length - 1);\n        return ( isNaN( valor ) ) ? \n                ( valor === 'A' ) ? 11 : 10\n                : valor * 1;\n    }\n\n\n    //Turno: 0 = primer jugador y el último será la computadora.\n    const acumularPuntos = (carta, turno ) => {\n        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );\n        puntosHTML[turno].innerText = puntosJugadores[turno];\n        return puntosJugadores[turno];\n    }\n\n    const crearCarta = (carta, turno) => {\n        const imgCarta = document.createElement('img');\n        imgCarta.src = `assets/cartas/${ carta }.png`; \n        imgCarta.classList.add('carta');\n        divCartasJugadores[turno].append(imgCarta);\n    }\n\n    const determinarGanador = () => {\n\n        const [ puntosMinimos, puntosComputadora] = puntosJugadores;\n\n        setTimeout(() => {\n            if( puntosComputadora === puntosMinimos ) {\n                alert('Nadie gana :(');\n            } else if ( puntosMinimos > 21 ) {\n                alert('Computadora gana')\n            } else if( puntosComputadora > 21 ) {\n                alert('Jugador Gana');\n            } else {\n                alert('Computadora Gana')\n            }\n        }, 100 );\n\n    }\n\n    // turno de la computadora\n    const turnoComputadora = ( puntosMinimos ) => {\n\n        let puntosComputadora = 0;\n        do {\n            const carta = pedirCarta();\n            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);\n            crearCarta(carta, puntosJugadores.length - 1 );\n\n\n        } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );\n\n        determinarGanador();\n    }\n\n\n\n    // Eventos\n    btnPedir.addEventListener('click', () => {\n\n        const carta = pedirCarta();\n        const puntosJugador = acumularPuntos(carta, 0);\n        \n        crearCarta(carta, 0);\n\n        if ( puntosJugador > 21 ) {\n            console.warn('Lo siento mucho, perdiste');\n            btnPedir.disabled   = true;\n            btnDetener.disabled = true;\n            turnoComputadora( puntosJugador );\n\n        } else if ( puntosJugador === 21 ) {\n            console.warn('21, genial!');\n            btnPedir.disabled   = true;\n            btnDetener.disabled = true;\n            turnoComputadora( puntosJugador );\n        }\n\n    });\n\n\n    btnDetener.addEventListener('click', () => {\n        btnPedir.disabled   = true;\n        btnDetener.disabled = true;\n        turnoComputadora( puntosJugadores[0]);\n    });\n\n    btnNuevo.addEventListener('click', () => {\n        inicializarJuego();\n    });\n\n    return {\n        nuevoJuego: inicializarJuego\n    };\n\n}) ();\n\n//# sourceURL=webpack://webpack-inicial/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;