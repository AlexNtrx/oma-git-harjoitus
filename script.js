document.addEventListener('DOMContentLoaded',()=>
    {
        const otsikko = document.querySelector('h1');

        otsikko.addEventListener('click',() => {
            otsikko.textContent = "Git-harjoitus suoritettu";
            otsikko.style.backgroundColor = "blue";
            otsikko.style.color = "white";
        });
    });