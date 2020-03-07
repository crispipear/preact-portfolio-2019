import Fade from 'react-reveal/Fade';

export default function CaseStudies(props) {
    const { children, ...other } = props;
    return(
        <Fade duration={1000} delay={100} {...other}>
            {children}
        </Fade>
    )
}