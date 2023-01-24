let isExplorer = true;

function changeCard(event){
    const card = event.currentTarget;
    const backgroundImage = isExplorer 
        ? "url(./assets/bg-explorer.svg)"
        : "url(./assets/bg-ignite.svg)"
    isExplorer = !isExplorer
    card.style.backgroundImage = backgroundImage;
}