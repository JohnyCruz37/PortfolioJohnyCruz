import React from 'react';

import '../Style/atomos/Botao.scss'

const Botao = ({ texto, link }) => {
    return (
        <a href={link} target='_blank'>
            <div className="btn btn-efeito btn-animado">
                <h6> {texto} </h6>
            </div>
        </a>
    )
}

export default Botao;