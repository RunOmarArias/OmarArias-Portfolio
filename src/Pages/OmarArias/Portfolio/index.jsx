import {
    StyledPorfolio,
    StyledPorfolioContent,
    StyledTitlePorfolio,
    StyledPortfolioHr,
    StyledHrContainerRight
} from '../styles.jsx';

import todoappImage from '../../../assets/projects/todoapp.png';
import calculatorImage from '../../../assets/projects/calculator.png';
import loginRadom from '../../../assets/projects/loginRandom.png';

import ProjectCard from './components/ProjectCard.jsx';

export default function Portfolio() {

    let todoapp = {
        title: 'Frontend Mentor - TODO app',
        description: 'This project was made with React. The todos are stored in firestore, feature from firebase. By the time todo is added o deleted, the todo list is reloaded and updated with the same data from the firestore database.',
        alt: 'todoapp',
        link: 'https://github.com/RunOmarArias/Frontend-Mentor-TODOapp'
    };

    let calculator = {
        title: 'Frontend Mentor - Calculator',
        description: 'Calculator with simple functions. This one has the simple operations like addition, subtraction, multiplication, division.',
        alt: 'calculator',
        link: 'https://github.com/RunOmarArias/Frontend-Mentor-calculator'
    };

    let login = {
        title: 'Demo - Punto Arte',
        description: `Page that has a Login and Sign in, which served to prove some layout skills.`,
        alt: 'Punto Arte',
        link: 'https://github.com/RunOmarArias/Random-Frontend-Demo'
    }

    return (
        <StyledPorfolio>
            <StyledPorfolioContent>
                <StyledTitlePorfolio>Portfolio</StyledTitlePorfolio>
                <StyledPortfolioHr />
                
                <ProjectCard
                    title= {calculator.title}
                    description= {calculator.description}
                    image= {calculatorImage}
                    alt= {calculator.alt}
                    link= {calculator.link}
                />
                <StyledPortfolioHr />
                <StyledHrContainerRight>
                    <StyledPortfolioHr />
                </StyledHrContainerRight>
                <ProjectCard
                    title= {todoapp.title}
                    description= {todoapp.description}
                    image= {todoappImage}
                    alt= {todoapp.alt}
                    link= {todoapp.link}
                />
                <StyledHrContainerRight>
                    <StyledPortfolioHr />
                </StyledHrContainerRight>
                <StyledPortfolioHr />
                <ProjectCard
                    title= {login.title}
                    description= {login.description}
                    image= {loginRadom}
                    alt= {login.alt}
                    link= {login.link}
                />
                <StyledPortfolioHr />
            </StyledPorfolioContent>
        </StyledPorfolio>
    );
}
