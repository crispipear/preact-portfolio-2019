export default ({action, hideText}) =>
<div class="scroll-indicator" onClick={action || function(){}}>
    <div class="scroll">
        <div class="scroll-line"></div>
    </div>
    {
        !hideText && <span>scroll</span>
    }
</div>