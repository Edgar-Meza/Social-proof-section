getRate = () => {
    let rates = document.querySelectorAll('.stars');
    rates.forEach(element => {
        let rate = element.dataset.rate;
        for (let i=0; i<parseInt(rate); i++) {
            let img_star = "<img src='./images/icon-star.svg' alt='star'>";
            element.innerHTML = img_star + element.innerHTML;
        }
    });
}
getRate();