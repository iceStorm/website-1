
document.addEventListener('DOMContentLoaded', () => {
    let p = document.querySelectorAll('#main >#middle ol li p');

    for (let i = 0; i < p.length; i++) {

        let currP = p[i];
        currP.addEventListener('click', () => {
            let div = currP.nextElementSibling;
            let thisP = currP;

            let isDisplayed = div.style.display === 'block';
            if (isDisplayed) {
                div.style.display = 'none';
                thisP.classList.toggle('rotate');
            }
            else {
                div.style.display = 'block';
                thisP.classList.toggle('rotate');
            }
        });
    }
});