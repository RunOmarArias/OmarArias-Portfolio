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
            <a title='bootstrap' href='https://getbootstrap.com/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={bootstrap} alt='bootstrap' />
                </StyledLogoContainer>
            </a>
            <a title='C#' href='https://docs.microsoft.com/en-us/dotnet/csharp/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={csharp} alt='csharp' />
                </StyledLogoContainer>
            </a>
            <a title='ExpressJS' href='https://expressjs.com/es/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={express} alt='express' />
                </StyledLogoContainer>
            </a>
            <a title='Firebase' href='https://firebase.google.com/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={firebase} alt='firebase' />
                </StyledLogoContainer>
            </a>
            <a title='Git' href='https://git-scm.com/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={git} alt='git' />
                </StyledLogoContainer>
            </a>
            <a title='GitHub' href='https://github.com/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={github} alt='github' />
                </StyledLogoContainer>
            </a>
            <a title='Java' href='https://www.java.com/en/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={java} alt='java' />
                </StyledLogoContainer>
            </a>
            <a title='JavaScript' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={js} alt='js' />
                </StyledLogoContainer>
            </a>
            <a title='MongoDB' href='https://www.mongodb.com/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={mongodb} alt='mongodb' />
                </StyledLogoContainer>
            </a>
            <a title='MySQL' href='https://www.mysql.com/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={mysql} alt='mysql' />
                </StyledLogoContainer>
            </a>
            <a title='NodeJS' href='https://nodejs.org/en/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={node} alt='node' />
                </StyledLogoContainer>
            </a>
            <a title='PostgreSQL' href='https://www.postgresql.org/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={postgres} alt='postgres' />
                </StyledLogoContainer>
            </a>
            <a title='React' href='https://reactjs.org/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={react} alt='react' />
                </StyledLogoContainer>
            </a>
            <a title='Redux' href='https://redux.js.org/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={redux} alt='redux' />
                </StyledLogoContainer>
            </a>
            <a title='Sass' href='https://sass-lang.com/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={sass} alt='sass' />
                </StyledLogoContainer>
            </a>
            <a title='styled-components' href='https://styled-components.com/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={sC} alt='styled-components' />
                </StyledLogoContainer>
            </a>
            <a title='TypeScript' href='https://www.typescriptlang.org/' target='_blank' rel="noopener noreferrer">
                <StyledLogoContainer className={position ? 'logo__' : ''} >
                    <StyledSkillsLogo src={ts} alt='ts' />
                </StyledLogoContainer>
            </a>
        </StyledLogoSection>
    );
}
