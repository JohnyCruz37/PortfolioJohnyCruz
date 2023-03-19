import React from 'react';
import TituloSecao from '../atomo/TituloSecao';

import '../Style/moleculas/SecaoSobre.scss'

const SecaoSobre = () => {
    return (
        <section id='sobre'>
            <TituloSecao texto={"sobre"} />
            <p>
                Olá! Seja muito bem-vindo a minha apresentação. <br/>
                Sou formado como Desenvolvedor FullStack pela Instituição de ensino Tera. Mas meu foco é o desenvolvimento Font-end. Sempre fui um apaixonado por tecnologia e principalmente pela área de softwares e programação e desde o fim do ano de 2021 me dedico a transformar essa paixão numa carreira de sucesso, colecionando conhecimentos fundamentais para realizar meus trabalhos com alto nível de excelência.
                Estou sempre aberto a desafios e a aprender coisas novas. Estudar faz parte da minha vida. 
            </p>
            <p>
                Obrigado por visitar minha apresentação. Se quiser, entre em contato. Fico a disposição para batermos um papo.
            </p>
        </section>
    )
}

export default SecaoSobre;