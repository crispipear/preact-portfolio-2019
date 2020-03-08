import Fade from 'react-reveal/Fade';

export default function CaseStudies(props) {
    const { children, ...other } = props;
    return(
        <Fade duration={800} delay={50} {...other}>
            {children}
        </Fade>
    )
}