import React from 'react';

import '../Style/moleculas/ContatoItem.scss';

const ContatoItem = ({ icone, titulo, texto }) => {
    return (
        <article className="card">
            <i> {icone} </i>
            <div className='card-info'>
                <p className='info-titulo'> {titulo} </p>
                <p className='info-texto'> {texto} </p>
            </div>

        </article>
    )
}

export default ContatoItem;