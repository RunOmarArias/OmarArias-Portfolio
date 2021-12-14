import { StyledHero, StyledHeroLogo, StyledHeroTitle } from '../../styles.jsx';
import atomColored from '../../../../assets/logos/atom4.png';

export default function Hero() {
    return (
        <StyledHero>
            <StyledHeroTitle>Computer-Systems Engineer</StyledHeroTitle>
            <StyledHeroLogo src={atomColored} alt='Atom' />
        </StyledHero>
    );
}