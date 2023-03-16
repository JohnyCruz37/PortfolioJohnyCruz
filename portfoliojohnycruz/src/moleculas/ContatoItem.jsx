import React from 'react';

import '../Style/moleculas/ContatoItem.scss';

const ContatoItem = ({icone, titulo, texto}) => {
    return(
        <article id="contato">
            {icone}
            <h6> {titulo} </h6>
            <h3> {texto} </h3>
        </article>
    )
}

export default ContatoItem;