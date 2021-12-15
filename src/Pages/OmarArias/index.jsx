import { useState } from 'react';
import './styles.css';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Header from './Header';
import Portfolio from './Portfolio';
import Skills from './Skills';
import {
    StyledOmarArias,
    BgBlur,
    BgLines,
    StyledFloatingMenu,
    StyledSvgUp,
    StyledFloatingHamburger
} from './styles.jsx';

export default function OmarArias() {

    const[flagMenu, setFlagMenu] = useState(false);

    const handleChangeFlagMenu = () => {
        setFlagMenu(!flagMenu);
    }

    const toInit = () => {
        window.scrollTo(0, 0);
    };

    const toAboutMe = () => {
        window.scrollTo(0, 577.3333129882812);
    };

    const toSkills = () => {
        window.scrollTo(0, 1154.6666259765625);
    };
    
    const toPortfolio = () => {
        window.scrollTo(0, 1732);
    };
    
    const toContact = () => {
        window.scrollTo(0, 2874);
    };

    return (
        <StyledOmarArias>
            <StyledFloatingMenu onClick={() => toInit()}>
                <StyledSvgUp
                    width='25'
                    height='25'
                    xmlns='http://www.w3.org/2000/svg'
                    fillRule='evenodd'
                    clipRule='evenodd'
                >
                    <path d='M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z' />
                </StyledSvgUp>
            </StyledFloatingMenu>
            <StyledFloatingHamburger onClick={() => handleChangeFlagMenu()}>
                <StyledSvgUp
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                >
                    <path d='M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z' />
                </StyledSvgUp>
            </StyledFloatingHamburger>
            <ul className={flagMenu ? 'ham_true' : 'ham_false'}>
                <li onClick={() => toInit()} className='ham_item'>^</li>
                <li onClick={() => toAboutMe()} className='ham_item'>About Me</li>
                <li onClick={() => toSkills()} className='ham_item'>Skills</li>
                <li onClick={() => toPortfolio()} className='ham_item'>Portfolio</li>
                <li onClick={() => toContact()} className='ham_item'>Contact</li>
            </ul>
            <BgBlur>
                <Header />
            </BgBlur>
            <AboutMe />
            <Skills />
            <Portfolio />
            <BgLines>
                <Contact />
            </BgLines>
        </StyledOmarArias>
    );
}
