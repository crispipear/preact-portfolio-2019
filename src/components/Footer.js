import { h } from 'preact';

export default ({scrollTop}) => 
<div className="footer container">
    <div>
        <span>&copy; Su Li 2019</span>
    </div>
    <div>
        <b onClick={scrollTop}>back to top</b>
    </div>
    <div>
        <a href="mailto:lisuy97@gmail.com">lisuy97@gmail.com</a>
    </div>
</div>