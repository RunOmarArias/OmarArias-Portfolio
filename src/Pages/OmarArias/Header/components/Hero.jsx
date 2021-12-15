import { StyledHero, StyledHeroLogo, StyledHeroTitle,
    StyledHeroGrow, StyledHeroEngineer } from '../../styles.jsx';
import atomColored from '../../../../assets/logos/atom4.png';

export default function Hero() {
    return (
        <StyledHero>
            <StyledHeroTitle>
                <StyledHeroGrow>Computer-Systems</StyledHeroGrow> <StyledHeroEngineer>Engineer</StyledHeroEngineer>
            </StyledHeroTitle>
            <StyledHeroLogo src={atomColored} alt='Atom' />
        </StyledHero>
    );
}