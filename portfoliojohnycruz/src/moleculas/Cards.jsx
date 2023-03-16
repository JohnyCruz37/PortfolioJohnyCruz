import React from 'react';

import '../Style/moleculas/Cards.scss'

const Card = ({ icone, titulo, texto }) => {
    return (
        <div className='card-tec'>
            <i> {icone} </i>
            <div>
                <h3> {titulo} </h3>
                <p> {texto} </p>
            </div>


        </div>
    )
}

export default Card;