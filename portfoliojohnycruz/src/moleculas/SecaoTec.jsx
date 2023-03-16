import React from 'react';
import {AiOutlineHtml5} from 'react-icons/ai';
import {SiCss3, SiReact} from 'react-icons/si';
import {IoLogoJavascript} from 'react-icons/io';

import TituloSecao from '../atomo/TituloSecao';


import '../Style/moleculas/SecaoTec.scss'
import Card from './Cards';

const SecaoTec = () => {
    return (
        <section id='tecnologia'>
            <TituloSecao texto={"tecnologias"} />
            <article className='tecnologia-cards'>
                
                <Card
                    icone={<AiOutlineHtml5/>}
                    titulo={'html'}
                    texto={'ipson Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
                />
                <Card
                    icone={<SiCss3/>}
                    titulo={'css'}
                    texto={'ipson Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
                />
                <Card
                    icone={<IoLogoJavascript/>}
                    titulo={'js'}
                    texto={'ipson Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
                />
                <Card
                    icone={<SiReact/>}
                    titulo={'react'}
                    texto={'ipson Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
                />
            </article>
        </section>
    )
}

export default SecaoTec;