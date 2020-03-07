import { useEffect, useRef, useState } from 'preact/hooks';
import HeroImage	from '../assets/hero.jpg';

export default function Hero(){
    const imageRef = useRef(null);
    const [transform, setTransform] = useState({transform: "translate(0,0)"});
    const [dims, setDims] = useState({
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: 0
    })
    useEffect(() => {
        resize();
        window.addEventListener('resize', resize, true);
        return () => {
            window.removeEventListener('resize', resize);
        }
    }, [])

    function resize(){
        let boundingRect = imageRef.current.getBoundingClientRect();
        setDims({
            minX: Math.floor(boundingRect.x),
            maxX: Math.floor(boundingRect.width + boundingRect.x),
            minY: Math.floor(boundingRect.y),
            maxY: Math.floor(boundingRect.height + boundingRect.y)
        })
    }

    function handleMouseMove(e){
        let cx = e.clientX;
        let cy = e.clientY;
        if(
            (cx >= dims.minX && cx <= dims.maxX) 
            &&
            (cy >= dims.minY && cy <= dims.maxY)
        ){
            let x = cx < (dims.maxX/2) ? 3.2 : -3.2;
            let y = cy < (dims.maxY/2) ? 3.2 : -3.2;
            setTransform(
                {
                    transform: `translate(${x}%, ${y}%)`
                }
            )
        }else{
            setTransform({transform: "translate(0, 0)"})
        }
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [dims])

    return(
        <div className='hero-background'>
            <div className='hero-image-wrapper' style={transform}>
                <div
                    className='hero-image'
                    ref={imageRef}
                    style={{backgroundImage: `url(${HeroImage})`}}
                />
                <div className='block-reveal'/>
            </div>
        </div>
    )
}