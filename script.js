for(const link of document.getElementsByClassName('link')){
    link.onmousemove = e => {
        const decimal = e.clientX / link.offsetWidth;

        const basePercent = 30,
        percentRange = 70,
        adjustablePercent = percentRange * decimal;

        const colorPercent = basePercent + adjustablePercent;

        // dev tools
        // console.log(`Cursor X position: ${e.clientX}, Color Percent: ${colorPercent}%`);
        // link.style.setProperty('--color-percent', '${colorPercent}%');
        link.style.setProperty('--color-percent', `${colorPercent}%`);
    }
}