import React from 'react'

/*export const Small = ({value}) => {
    console.log('Me volví a dibujar :(');

    return (
        <small>{value}</small>
    )
}*/


// Indicando a React que debe memorizar el estado del compontente
export const Small = React.memo(({value}) => {
    // Lógica compleja que debería volverse a ejecutar solo si el componente se monta por primera vez, su estado inerno cambia, o sus props cambian
    console.log('Me volví a dibujar :(');

    return (
        <small>{value}</small>
    )
});

