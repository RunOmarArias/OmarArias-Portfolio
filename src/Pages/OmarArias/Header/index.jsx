import OAlogo from '../../../assets/logos/OA.png';
import {
    StyledInitial,
    StyledHeader,
    StyledHeaderLogo,
    StyledAllLogo,
    StyledUl,
    StyledLogoName,
    StyledLi
} from '../styles.jsx';
import Hero from './components/Hero';

export default function Header() {

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
        <StyledInitial>
            <StyledHeader>
                <StyledAllLogo>
                    <StyledHeaderLogo src={OAlogo} alt='OAlogo' />
                    <StyledLogoName>OMAR ARIAS</StyledLogoName>
                </StyledAllLogo>
                <nav>
                    <StyledUl> 
                        <StyledLi onClick={() => toAboutMe()}>About Me</StyledLi>
                        <StyledLi onClick={() => toSkills()}>Skills</StyledLi>
                        <StyledLi onClick={() => toPortfolio()}>Portfolio</StyledLi>
                        <StyledLi onClick={() => toContact()}>Contact</StyledLi>
                    </StyledUl>
                </nav>
            </StyledHeader>
            <Hero />
        </StyledInitial>
    );
}
