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
`;

export const StyledAllLogo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${titleFont()};
    flex-direction: row;
    width: 16%;
`;

export const StyledHeaderLogo = styled.img`
    width: 30px;
`;

export const StyledLogoName = styled.h1`
    ${fit()};
`;

export const StyledUl = styled.ul`
    ${center()};
    flex-direction: row;
    list-style: none;
`;

export const StyledLi = styled.li`
    margin: 0 15px;
    cursor: pointer;
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
`;

export const StyledHeroTitle = styled.h1`
    font-size: 50px;
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
`;

export const StyledLogoContainer = styled.div`
    ${center()};
    width: 70px;
    height: 70px;
    margin: 15px;
    background-color: rgba(162, 162, 162, 0.4);
    border-radius: 10px;
`;

export const StyledSkillsLogo = styled.img`
    width: 50px;
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
`;

export const StyledPortfolioHr = styled.hr`
    margin: 0;
    width: 280px;
    height: 5px;
    background-color: #55ffff;
    border: none;
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
`;

export const StyledCardLink = styled.a`
    border: none;
    text-decoration: none;
    color: #00e699;
`;

export const StyledCardTitle = styled.h2`
    margin: 0 0 10px 0;
    :hover {
        color: white;
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
`;

export const StyledTag = styled.span`
    font-family: 'Pally', sans-serif;
    color: #e0c848;
`;

export const StyledAboutMeTitle = styled.h1`
    margin: 0 0 0 15px;
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
`;

export const StyledStr = styled.img`
    margin-left: 38px;
    width: 200px;
    position: absolute;
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
`;

export const StyledDescriptionText = styled.p`
    font-size: 28px;
    ${normalFont};
    width: 65%;
    margin: 0 auto 0;
    color: #91e041;
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
