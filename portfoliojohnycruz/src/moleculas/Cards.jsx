import React from 'react';

import '../Style/moleculas/Cards.scss'

const Card = ({ icone, titulo, id }) => {
    return (
        <div className='card-tec'>
            <div className='card-tec-icone'>
                <i id={id}> {icone} </i>
            </div>

            <div  className='card-tec-texto'>
                <h3> {titulo} </h3>
                <p> ipson Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
        </div>
    )
}

export default Card;