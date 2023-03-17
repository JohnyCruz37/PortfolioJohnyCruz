import React from 'react';
import { SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl';
import { FaGithub } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';

import '../Style/moleculas/SecaoRedesSociais.scss'

const IconesSociais = [
    {name: "linkedin", icon: <SlSocialLinkedin />},
    {name: "instagram", icon: <SlSocialInstagram />},
    {name: "github", icon: <FaGithub />},
    {name: "whatsapp", icon: <SiWhatsapp />},
]


const SecaoRedesSociais = () => {
    return (
        <section id='rede-sociais'>
            {IconesSociais.map((icone)=>(
                <a href="#" className='social-link' id={icone.name} key={icone.name}>
                    {icone.icon}
                </a>
            ))}
        </section>
    )
}

export default SecaoRedesSociais;