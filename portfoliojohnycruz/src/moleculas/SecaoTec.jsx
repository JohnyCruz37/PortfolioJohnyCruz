import React from 'react';
import {AiOutlineHtml5} from 'react-icons/ai';

import TituloSecao from '../atomo/TituloSecao';


import '../Style/moleculas/SecaoTec.scss'
import Card from './Cards';

const SecaoTec = () => {
    return (
        <section id='tecnologia'>
            <TituloSecao texto={"tecnologias"} />
            <article className='tecnoligia-cards'>
                
                <Card
                    icone={<AiOutlineHtml5/>}
                    titulo={'html'}
                    texto={'ipson Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit omnis eligendi ab repudiandae laboriosam ut non at harum explicabo dolor est aut a voluptatum veritatis exercitationem corrupti, tempora possimus accusamus' }
                />
                <Card
                    icone={<AiOutlineHtml5/>}
                    titulo={'html'}
                    texto={'ipson Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit omnis eligendi ab repudiandae laboriosam ut non at harum explicabo dolor est aut a voluptatum veritatis exercitationem corrupti, tempora possimus accusamus' }
                />
                <Card
                    icone={<AiOutlineHtml5/>}
                    titulo={'html'}
                    texto={'ipson Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit omnis eligendi ab repudiandae laboriosam ut non at harum explicabo dolor est aut a voluptatum veritatis exercitationem corrupti, tempora possimus accusamus' }
                />
                <Card
                    icone={<AiOutlineHtml5/>}
                    titulo={'html'}
                    texto={'ipson Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit omnis eligendi ab repudiandae laboriosam ut non at harum explicabo dolor est aut a voluptatum veritatis exercitationem corrupti, tempora possimus accusamus' }
                />
            </article>
        </section>
    )
}

export default SecaoTec;