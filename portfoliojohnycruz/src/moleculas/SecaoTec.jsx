import React from 'react';
import { DiHtml5, DiCss3, DiBootstrap, DiJavascript, DiReact, DiGit } from 'react-icons/di';

import TituloSecao from '../atomo/TituloSecao';
import Card from './Cards';

import '../Style/moleculas/SecaoTec.scss'

const tecnologiasLista = [
    {
        id: 'html',
        nome: 'html5',
        icone: <DiHtml5 />,
    },
    {
        id: 'css',
        nome: 'css3',
        icone: <DiCss3 />,
    },
    {
        id: 'js',
        nome: 'JavaScript',
        icone: <DiJavascript />,
    },
    {
        id: 'bt',
        nome: 'bootstrap',
        icone: <DiBootstrap />,
    },
    {
        id: 'react',
        nome: 'react.js',
        icone: <DiReact />,
    },
    {
        id: 'git',
        nome: 'git',
        icone: <DiGit />,
    }
]

const SecaoTec = () => {
    return (
        <section id='tecnologia'>
            <TituloSecao texto={"tecnologias"} />
            <article className='tecnologia-cards'>
                {
                    tecnologiasLista.map((tec) => (

                        <Card
                            key={tec.id}
                            id={tec.id}
                            icone={tec.icone}
                            titulo={tec.nome}
                        />
                    ))
                }
            </article>
        </section >
    )
}

export default SecaoTec;