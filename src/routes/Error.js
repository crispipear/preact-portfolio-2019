import { h } from 'preact';
import { Link } from 'preact-router/match';

export default function Error() {
   return(
    <section className='home error'>
        <div className='container'>
            <div className='error-bg' style={{backgroundImage: `url(${'../assets/notFound.png'})`}}>
                <h1 data-text="404">404</h1>
            </div>
            <p className='serifFont'>Looks like you are lost..</p>
            <p><Link className='underline' href='/'>let's go back home</Link></p>
        </div>
    </section>
   )
}