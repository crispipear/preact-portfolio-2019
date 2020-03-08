import { useEffect, useState } from 'preact/hooks';

export default function Footer(props){
    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setOpacity(1);
        }, 1000)
    }, [])
    return (
        <div className="footer container" style={{opacity}}>
            <div>
                <span>&copy; Su Li 2020</span>
            </div>
            <div>
                <b onClick={props.scrollTop}>back to top</b>
            </div>
            <div>
                <a href="mailto:lisuy97@gmail.com">lisuy97@gmail.com</a>
            </div>
        </div>
    )
} 
