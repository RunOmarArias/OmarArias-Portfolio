import OAlogo from '../../../assets/logos/OA.png';
import {
    StyledInitial,
    StyledHeader,
    StyledHeaderLogo,
    StyledAllLogo,
    StyledUl,
    StyledLogoName,
    StyledLi,
} from '../styles.jsx';
import Hero from './components/Hero';

export default function Header() {
    return (
        <StyledInitial>
            <StyledHeader>
                <StyledAllLogo>
                    <StyledHeaderLogo src={OAlogo} alt='OAlogo' />
                    <StyledLogoName>OMAR ARIAS</StyledLogoName>
                </StyledAllLogo>
                <nav>
                    <StyledUl>
                        <StyledLi>About Me</StyledLi>
                        <StyledLi>Skills</StyledLi>
                        <StyledLi>Portfolio</StyledLi>
                        <StyledLi>Contact</StyledLi>
                    </StyledUl>
                </nav>
            </StyledHeader>
            <Hero />
        </StyledInitial>
    );
}
