import '../../../OmarArias/styles.css';

import {
    StyledSkillsLogo,
    StyledLogoSection,
    StyledLogoContainer,
} from '../../styles.jsx';
import bootstrap from '../../../../assets/logos/bootstrap.png';
import csharp from '../../../../assets/logos/C#.png';
import express from '../../../../assets/logos/express.png';
import firebase from '../../../../assets/logos/firebase.png';
import git from '../../../../assets/logos/git.png';
import github from '../../../../assets/logos/github.png';
import java from '../../../../assets/logos/java.png';
import js from '../../../../assets/logos/js.png';
import mongodb from '../../../../assets/logos/mongodb.png';
import mysql from '../../../../assets/logos/mysql.png';
import node from '../../../../assets/logos/node.png';
import postgres from '../../../../assets/logos/postgreSQL.png';
import react from '../../../../assets/logos/react.png';
import redux from '../../../../assets/logos/redux.png';
import sass from '../../../../assets/logos/sass.png';
import sC from '../../../../assets/logos/sc.png';
import ts from '../../../../assets/logos/typescript.png';

export default function Logo({ position }) {

    return (
        <StyledLogoSection>
            <a href='https://getbootstrap.com/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={bootstrap} alt='bootstrap' />
                </StyledLogoContainer>
            </a>
            <a href='https://docs.microsoft.com/en-us/dotnet/csharp/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={csharp} alt='csharp' />
                </StyledLogoContainer>
            </a>
            <a href='https://expressjs.com/es/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={express} alt='express' />
                </StyledLogoContainer>
            </a>
            <a href='https://firebase.google.com/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={firebase} alt='firebase' />
                </StyledLogoContainer>
            </a>
            <a href='https://git-scm.com/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={git} alt='git' />
                </StyledLogoContainer>
            </a>
            <a href='https://github.com/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={github} alt='github' />
                </StyledLogoContainer>
            </a>
            <a href='https://www.java.com/en/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={java} alt='java' />
                </StyledLogoContainer>
            </a>
            <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={js} alt='js' />
                </StyledLogoContainer>
            </a>
            <a href='https://www.mongodb.com/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={mongodb} alt='mongodb' />
                </StyledLogoContainer>
            </a>
            <a href='https://www.mysql.com/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={mysql} alt='mysql' />
                </StyledLogoContainer>
            </a>
            <a href='https://nodejs.org/en/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={node} alt='node' />
                </StyledLogoContainer>
            </a>
            <a href='https://www.postgresql.org/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={postgres} alt='postgres' />
                </StyledLogoContainer>
            </a>
            <a href='https://reactjs.org/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={react} alt='react' />
                </StyledLogoContainer>
            </a>
            <a href='https://redux.js.org/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={redux} alt='redux' />
                </StyledLogoContainer>
            </a>
            <a href='https://sass-lang.com/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={sass} alt='sass' />
                </StyledLogoContainer>
            </a>
            <a href='https://styled-components.com/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={sC} alt='styled-components' />
                </StyledLogoContainer>
            </a>
            <a href='https://www.typescriptlang.org/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={ts} alt='ts' />
                </StyledLogoContainer>
            </a>
        </StyledLogoSection>
    );
}
