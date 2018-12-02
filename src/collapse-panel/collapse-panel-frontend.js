document.addEventListener("DOMContentLoaded", () => {
    
    const collapsePanels = document.querySelectorAll('.lcb-cp-container')
    const headersCollapsePanel = document.querySelectorAll('.lcb-cp-title');

    headersCollapsePanel.forEach( header => {
        header.addEventListener('click', () => {
            header.classList.toggle('opened');
        })
    })

    collapsePanels.forEach( el => {
        const height = el.scrollHeight;
        el.style.setProperty('--max-height', height + 'px');
    });
});
