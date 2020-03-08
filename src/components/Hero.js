import { useEffect, useRef, useState } from 'preact/hooks';
import HeroImage	from '../assets/hero.jpg';
import Reveal       from '../components/Reveal';

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
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [])

    function resize(){
        let boundingRect = imageRef.current.getBoundingClientRect();
        setDims({
            minX: Math.floor(boundingRect.x),
            maxX: Math.floor(boundingRect.width + boundingRect.x),
            //add y to current scroll position, just in case not scrolled to the top
            minY: Math.floor(boundingRect.y + window.pageYOffset), 
            maxY: Math.floor(boundingRect.height + (boundingRect.y + window.pageYOffset))
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
        setTimeout(() => {
            window.addEventListener('mousemove', handleMouseMove);
        }, 1000)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [dims])

    return(
    <div className='hero-background'>
        <Reveal>
            <div
                className='hero-image'
                ref={imageRef}
                style={{...transform, backgroundImage: `url(${HeroImage})`}}
            />
        </Reveal>
    </div>
    )
}