import React from 'react';

import '../Style/moleculas/Cards.scss'

const Card = ({ icone, titulo, id, texto }) => {
    return (
        <div className='card-tec card-animacao'>
            <div className='card-tec-icone'>
                <i id={id}> {icone} </i>
            </div>

            <div  className='card-tec-texto'>
                <h3> {titulo} </h3>
                <p> {texto} </p>
            </div>
        </div>
    )
}

export default Card;