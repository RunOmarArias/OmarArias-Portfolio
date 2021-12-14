import AboutMe from './AboutMe';
import Contact from './Contact';
import Header from './Header';
import Portfolio from './Portfolio';
import Skills from './Skills';
import { StyledOmarArias, BgBlur, BgLines } from './styles.jsx';

export default function OmarArias() {
    return (
        <StyledOmarArias>
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
