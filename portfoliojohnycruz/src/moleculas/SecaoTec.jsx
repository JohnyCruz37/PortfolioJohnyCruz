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
        texto: 'Sou capaz de pensar nos elementos necessários para que a página fique bem estruturada e semanticamente correta, ajudando os buscadores.'
    },
    {
        id: 'css',
        nome: 'css3',
        icone: <DiCss3 />,
        texto: 'Com ela sou capaz de dar vida aos elementos do HTML. Adicionando cores, formatos, fontes, animações e efeitos incríveis.'
    },
    {
        id: 'js',
        nome: 'JavaScript',
        icone: <DiJavascript />,
        texto: 'É aqui onde a mágica acontece. Com essa linguagem tornamos o site realmente vivo. Aqui está a alma das páginas web. '
    },
    {
        id: 'bt',
        nome: 'bootstrap',
        icone: <DiBootstrap />,
        texto: 'Um grande aliado para tornar a produção diária mais rápida e eficiente. Com modelos de estruturas evita começar do extremo zero.'
    },
    {
        id: 'react',
        nome: 'react.js',
        icone: <DiReact />,
        texto: 'Minha paixão como front-end. React.js torna qualquer trabalho mais produtivo e escalável.'
    },
    {
        id: 'git',
        nome: 'git',
        icone: <DiGit />,
        texto: 'Trabalhar com versões de um mesmo projeto e poder recuperar etapas anteriores.'
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
                            texto={tec.texto}
                        />
                    ))
                }
            </article>
        </section >
    )
}

export default SecaoTec;