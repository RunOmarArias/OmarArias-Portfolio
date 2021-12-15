import styled from 'styled-components';
import blurNice from '../../assets/background/blur.jpg';

const center = () => `
    display: flex;
    justify-content: center;
    align-items: center;
`;

const titleFont = () => `
    font-family: 'M PLUS 1 Code', sans-serif;
`;

const normalFont = () => `
    font-family: 'Barlow', sans-serif;
`;

const fit = () => `
    margin: 0;
    padding: 0;
`;

export const StyledOmarArias = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=M+PLUS+1+Code:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');
    @import url('https://api.fontshare.com/css?f[]=pally@400&display=swap');
`;

export const StyledFloatingMenu = styled.button`
    color: #99A3A4;
    position: fixed;
    top: 450px;
    left: 35px;
    width: 50px;
    height: 50px;
    background-color: #E67E22;
    border-radius: 30px;
    border: none;
    box-shadow: 8px 10px 12px -11px rgba(0,0,0,0.75);
    @keyframes vibrate-2{0%{transform:translate(0)}20%{transform:translate(2px,-2px)}40%{transform:translate(2px,2px)}60%{transform:translate(-2px,2px)}80%{transform:translate(-2px,-2px)}100%{transform:translate(0)}}
    :hover {
        animation: vibrate-2 .2s linear both;
        cursor: pointer;
    }
    @media (max-width: 599px) {
        display: none;   
    }
`;

export const StyledFloatingHamburger = styled.button`
    z-index: 1;
    color: #99A3A4;
    position: fixed;
    top: 40px;
    right: 25px;
    width: 50px;
    height: 50px;
    background-color: #E67E22;
    border-radius: 30px;
    border: none;
    box-shadow: 8px 10px 12px -11px rgba(0,0,0,0.75);
    @keyframes vibrate-2{0%{transform:translate(0)}20%{transform:translate(2px,-2px)}40%{transform:translate(2px,2px)}60%{transform:translate(-2px,2px)}80%{transform:translate(-2px,-2px)}100%{transform:translate(0)}}
    :hover {
        animation: vibrate-2 .2s linear both;
    }
    @media (min-width: 599px) {
        display: none;   
    }
`;

export const StyledSvgUp = styled.svg`
    fill: white;
`;

export const BgBlur = styled.div`
    background-image: url(${blurNice});
    height: 100vh;
    margin-bottom: 0px;
    box-shadow: -2px 12px 37px -7px rgba(0, 0, 0, 0.75);
`;

export const StyledInitial = styled.div`
    height: 100%;
`;

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    ${normalFont()};
    padding-top: 15px;
    color: white;
    @media (max-width: 599px) {
        flex-direction: column;
        padding-top: 40px;
    }
`;

export const StyledAllLogo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${titleFont()};
    flex-direction: row;
    width: 16%;
    @media (max-width: 599px) {
        width: 100vw;
        flex-direction: column;
    }
`;

export const StyledHeaderLogo = styled.img`
    width: 30px;
`;

export const StyledLogoName = styled.h1`
    ${fit()};
    @media (max-width: 499px) {
        margin-top: 5px;
    }
`;

export const StyledUl = styled.ul`
    ${center()};
    flex-direction: row;
    list-style: none;
    @media (max-width: 599px) {
        display: none;
    }
`;

export const StyledLi = styled.li`
    margin: 0 10px;
    padding: 5px;
    border: 1px inset rgba(198, 198, 198, 0.5);
    border-radius: 5px;
    :hover {
        cursor: pointer;
        color: black;
        background-color: white;
    }
`;

export const StyledHero = styled.div`
    color: white;
    ${titleFont()};
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (max-width: 599px) {
        flex-direction: column-reverse;
        height: 75%;
    }
    @media (max-width: 799px) {
        flex-direction: column-reverse;
    }
`;

export const StyledHeroTitle = styled.h1`
    font-size: 50px;
    @media (max-width: 599px) {
        font-size: 35px;
        text-align: center;
    }
`;

export const StyledHeroGrow = styled.span`
    color: #5fa4fe;
`;

export const StyledHeroEngineer = styled.span`
    color: #ecda00;
`;

export const StyledHeroLogo = styled.img`
    width: 60px;
    margin-left: 20px;
    animation-name: spin;
    animation-duration: 9500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const StyledSkills = styled.div`
    ${titleFont()};
    height: 100vh;
    ${center()};
    flex-direction: column;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='.5' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cuse fill='%23fcfcfc' href='%23s' y='2'/%3E%3Cuse fill='%23fcfcfc' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='2'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23f2f2f2'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23efefef'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
`;

export const StyledSkillsTitle = styled.h1`
    color: #ff6600;
`;

export const StyledLogoSection = styled.section`
    display: flex;
    width: 50%;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 599px) {
        width: 100%;
    }
`;

export const StyledLogoContainer = styled.div`
    ${center()};
    width: 70px;
    height: 70px;
    margin: 15px;
    background-color: rgba(162, 162, 162, 0.4);
    border-radius: 10px;
    :hover {
        background-color: rgba(231, 231, 231, 0.4);
    }
    @media (max-width: 599px) {
        width: 60px;
        height: 60px;
        margin: 10px;
    }
`;

export const StyledSkillsLogo = styled.img`
    width: 50px;
    @keyframes pulsate-bck {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
        50% {
            -webkit-transform: scale(0.9);
            transform: scale(0.9);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
    :hover {
        animation: pulsate-bck 0.5s ease-in-out both;
    }
    @media (max-width: 599px) {
        width: 40px;
    }
`;

export const StyledPorfolio = styled.div`
    ${normalFont()};
    background-color: #3f59ee;
    color: #f7bd26;
`;

export const StyledPorfolioContent = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: 599px) {
        padding: 0;
    }
`;

export const StyledTitlePorfolio = styled.h1`
    ${titleFont()};
    display: flex;
    justify-content: center;
`;

export const StyledHrContainerRight = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 599px) {
        justify-content: flex-start;
    }
`;

export const StyledPortfolioHr = styled.hr`
    margin: 0;
    width: 280px;
    height: 5px;
    background-color: #55ffff;
    border: none;
    @media (max-width: 599px) {
        display: none;
    }
`;

export const StyledProjectCard = styled.div`
    width: 90%;
    height: 300px;
    margin: 15px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #00e699;
    @media (max-width: 599px) {
        flex-direction: column;
        width: 100%;
        height: auto;
    }
`;

export const StyledCardLink = styled.a`
    border: none;
    text-decoration: none;
    color: #00e699;
    @media (max-width: 599px) {
    }
`;

export const StyledCardTitle = styled.h2`
    margin: 0 0 10px 0;
    :hover {
        color: white;
    }
    @media (max-width: 599px) {
        margin: 10px 0;
    }
`;

export const StyledCardSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 0 25px;
`;

export const StyledProjectDescription = styled.p`
    width: 65%;
    @media (max-width: 599px) {
        display: none;
    }
`;

export const StyledImageContainer = styled.div`
    width: 200px;
    height: 190px;
    display: flex;
    justify-content: center;
`;

export const StyledCardImage = styled.img`
    max-height: 100%;
    max-width: 100%;
    border: 3px solid;
    border-radius: 10px;
    :hover {
        border: 3px solid white;
        animation-name: pulse;
        animation-duration: 1s;
    }
    @keyframes pulse {
        0% {
            transform: scale3d(1, 1, 1);
        }
        50% {
            transform: scale3d(1.05, 1.05, 1.05);
        }
        100% {
            transform: scale3d(1, 1, 1);
        }
    }
`;

export const StyledAboutMe = styled.div`
    color: white;
    background-color: #4b009a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const StyledMyTitle = styled.div`
    ${titleFont()};
    width: 80%;
    display: flex;
    flex-direction: column;
    @media (max-width: 599px) {
        margin: 20px 0;
    }
    @media (max-width: 599px) {
        font-size: 25px;
    }
`;

export const StyledTag = styled.span`
    font-family: 'Pally', sans-serif;
    color: #e0c848;
`;

export const StyledAboutMeTitle = styled.h1`
    margin: 0 0 0 15px;
    @media (max-width: 599px) {
        font-size: 50px;
        width: 200px;
    }
`;

export const StyledMyDescription = styled.div`
    ${center()};
    flex-direction: column;
`;

export const StyledDescriptionTitle = styled.h3`
    ${titleFont()};
    font-size: 40px;
    color: #91e041;
    margin: 0;
    position: relative;
    @media (max-width: 599px) {
        text-align: center;
    }
    @media (max-width: 699px) {
        text-align: center;
    }
`;

export const StyledStr = styled.img`
    margin-left: 38px;
    width: 200px;
    position: absolute;
    @media (max-width: 599px) {
        left: 60px;
    }
`;

export const StyledEngineer = styled.span`
    animation-duration: 1s;
    animation-iteration-count: infinite;
    :hover {
        animation-name: colorTransform;
    }

    @keyframes colorTransform {
        from {
            color: #91e041;
        }
        to {
            color: gold;
        }
    }
`;

export const StyledDescription = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 499px) {
        justify-content: center;
    }
`;

export const StyledDescriptionText = styled.p`
    font-size: 28px;
    ${normalFont};
    width: 65%;
    margin: 0 auto 0;
    color: #91e041;
    @media (max-width: 499px) {
        font-size: 20px;
        width: 90vw;
        margin-top: 20px;
    }
    @media (max-width: 699px) {
        margin-top: 20px;
    }

`;

export const StyledDescriptionFocus = styled.span`
    :hover {
        background-color: #3a648a;
        color: white;
    }
`;

export const StyledMyImageContainer = styled.div`
    width: 20%;
    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
    border: 3px solid #91e041;
    @media (max-width: 599px) {
        display: none;
    }
    @media (max-width: 699px) {
        display: none;
    }
`;

export const StyledMyImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const BgLines = styled.div`
    height: 100vh;
    background-color: #141416;
`;

export const StyledContact = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledAll = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledContactTitle = styled.h1`
    ${titleFont()};
    color: #f0f000;
`;

export const StyledAble = styled.p`
    ${normalFont()};
    color: white;
    font-size: 30px;
    margin-bottom: 45px;
    @media (max-width: 665px) {
        text-align: center;
    }
`;

export const StyledLinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const StyledLinks = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
`;

export const StyledLinkdescription = styled.span`
    ${normalFont()};
    margin-top: 8px;
    color: white;
`;
export const StyledLinkIcon = styled.svg`
    fill: white;
    :hover {
        fill: #f0f000;
    }
`;
