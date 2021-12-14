import {
    StyledAboutMe,
    StyledMyTitle,
    StyledMyDescription,
    StyledDescription,
    StyledMyImageContainer,
    StyledMyImage,
    StyledTag,
    StyledDescriptionText,
    StyledDescriptionTitle,
    StyledAboutMeTitle,
    StyledDescriptionFocus,
    StyledEngineer,
    StyledStr
} from '../styles.jsx';

import myPhotoProfile from '../../../assets/photos/myPhoto2.jpg';
import str from '../../../assets/logos/stripes.svg';

export default function AboutMe() {
    return (
        <StyledAboutMe>
            <StyledMyTitle>
                <StyledTag>{`< MyTitle >`}</StyledTag>
                <StyledAboutMeTitle>About Me</StyledAboutMeTitle>
                <StyledTag>{`</ MyTitle >`}</StyledTag>
            </StyledMyTitle>
            <StyledMyDescription>
                <StyledDescriptionTitle>
                <StyledStr src={str} alt='str' />
                    <div>
                        A minimalist Computer-Systems <StyledEngineer>Engineer</StyledEngineer>
                    </div>
                </StyledDescriptionTitle>
                <StyledDescription>
                    <StyledDescriptionText>
                        I have focused on <StyledDescriptionFocus>Web Development </StyledDescriptionFocus>
                        area, where I have built some pages on the library
                        <StyledDescriptionFocus> React</StyledDescriptionFocus>. Also I used <StyledDescriptionFocus>Angular </StyledDescriptionFocus>
                        to create two projects in my University. I have
                        knowledge in <StyledDescriptionFocus>database SQL</StyledDescriptionFocus>,
                        <StyledDescriptionFocus> noSQL,</StyledDescriptionFocus> and <StyledDescriptionFocus>backend languages</StyledDescriptionFocus>.
                    </StyledDescriptionText>
                    <StyledMyImageContainer>
                        <StyledMyImage src={myPhotoProfile} alt='My photo' />
                    </StyledMyImageContainer>
                </StyledDescription>
            </StyledMyDescription>
        </StyledAboutMe>
    );
}
