import React from 'react';

import '../Style/atomos/Botao.scss'

const Botao = ({texto}) => {
    return (
        <div className="btn btn-efeito btn-animado">
            <h6> {texto} </h6>
        </div>
    )
}

export default Botao;