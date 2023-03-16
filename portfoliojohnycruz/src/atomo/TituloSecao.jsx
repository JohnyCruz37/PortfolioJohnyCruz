import React from 'react';

import '../Style/atomos/TituloSecao.scss';

const TituloSecao = ({ texto }) => {
    return (
        <>
            <h2> {texto} </h2>
            <div>
                <span></span>
            </div>

        </>
    )
}

export default TituloSecao;