import { useEffect, useState } from 'preact/hooks';

export default function Scroll(props){
    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setOpacity(1);
        }, 3000)
    }, [])
    return (
        <div class="scroll-indicator" onClick={props.action || function(){}} style={{opacity}}>
            <div class="scroll">
                <div class="scroll-line"></div>
            </div>
            {
                !props.hideText && <span>scroll</span>
            }
        </div>
    )
} 
