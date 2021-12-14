import { useState, useEffect } from 'react';
import { StyledSkills, StyledSkillsTitle } from '../styles.jsx';
import Logo from './components/Logo.jsx';

export default function Skills() {

    const[positionAnimation, setPositionAnimation] = useState(0);
    const[flagAnimation, setFlagAnimation] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            setPositionAnimation(window.scrollY);
            positionAnimation >= 1004 ? setFlagAnimation(true) : setFlagAnimation(false);
        };
    }, [positionAnimation]);
    
    return (
        <StyledSkills>
            <StyledSkillsTitle>Skills</StyledSkillsTitle>
            <Logo position={flagAnimation} />
        </StyledSkills>
    );
}
