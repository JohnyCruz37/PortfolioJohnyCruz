import React from 'react';
import { SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl';
import { FaGithub } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';

import '../Style/moleculas/SecaoRedesSociais.scss'

const IconesSociais = [
    {
        name: "linkedin",
        icon: <SlSocialLinkedin />,
        link: 'https://www.linkedin.com/in/johny-cruz/'
    },
    {
        name: "instagram",
        icon: <SlSocialInstagram />,
        link: 'https://www.instagram.com/dev.johnycruz/'
    },
    {
        name: "github",
        icon: <FaGithub />,
        link: 'https://github.com/JohnyCruz37'
    },
    {
        name: "whatsapp",
        icon: <SiWhatsapp />,
        link: 'https://api.whatsapp.com/send?phone=551195681112&text=Vi%20seus%20portf%C3%B3lio%20e%20queria%20falar%20sobre%20'
    }
]


const SecaoRedesSociais = () => {
    return (
        <section id='rede-sociais'>
            {IconesSociais.map((icone) => (
                <a
                    href={icone.link}
                    className='social-link'
                    id={icone.name}
                    key={icone.name}
                    target='_blank'
                >
                    {icone.icon}
                </a>
            ))}
        </section>
    )
}

export default SecaoRedesSociais;