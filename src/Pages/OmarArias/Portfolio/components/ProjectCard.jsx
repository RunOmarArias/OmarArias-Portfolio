import {
    StyledProjectCard,
    StyledProjectDescription,
    StyledCardSection,
    StyledCardTitle,
    StyledCardImage,
    StyledCardLink,
    StyledImageContainer
} from '../../styles.jsx';

export default function ProjectCard({ title, description, link, image, alt }) {
    return (
        <StyledProjectCard>
            <StyledCardSection>
                <StyledCardLink href={link}>
                    <StyledCardTitle>{title}</StyledCardTitle>
                </StyledCardLink>
                <StyledProjectDescription>
                    {description}
                </StyledProjectDescription>
            </StyledCardSection>
            <StyledImageContainer>
                <StyledCardLink href={link}>
                    <StyledCardImage src={image} alt={alt} />
                </StyledCardLink>
            </StyledImageContainer>
        </StyledProjectCard>
    );
}
