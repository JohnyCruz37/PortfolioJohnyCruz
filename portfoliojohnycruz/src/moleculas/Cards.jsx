import React from 'react';

import '../Style/moleculas/Cards.scss'

const Card = ({icone, titulo, texto}) => {
    return(
        <>
            {icone} 
            <h3> {titulo} </h3>
            <p> {texto} </p>

        </>
    )
}

export default Card;