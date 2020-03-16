import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

export default function(props){
    const [val, setVal] = useState(1);
    const [textVal, setTextVal] = useState(1);
    useEffect(() => {
        if(props.isLoading == false){
            setTextVal(0);
            setTimeout(() => {
                setVal(0);
            }, 200)
        }
    }, [props.isLoading])
    return(
        <section className="load-screen" style={{opacity: val}}>
            <span style={{opacity: textVal}}>loading</span>
        </section>
    )
}