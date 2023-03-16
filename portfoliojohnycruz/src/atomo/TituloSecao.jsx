import React from 'react';
import {GiCircle} from 'react-icons/gi'

import '../Style/atomos/TituloSecao.scss';

const TituloSecao = ({ texto }) => {
    return (
        <div className='titulo-secao'>
            <h2> {texto} </h2>
            <div className='titulo-detalhe'>
               <GiCircle className='circulo' id='c1'/>
               <GiCircle className='circulo' id='c2'/>
               <GiCircle className='circulo' id='c3'/>
               <GiCircle className='circulo' id='c4'/>
               <GiCircle className='circulo' id='c5'/>
               <GiCircle className='circulo' id='c6'/>

            </div>

        </div>
    )
}

export default TituloSecao;