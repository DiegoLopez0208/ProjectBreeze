const flower = document.getElementsByClassName('flower')[0];
const petals = document.querySelectorAll('.petal');

const flowerTimeout = setTimeout(() => {
    flower.classList.add('animated');
}, 1800);

const petalsGrowTimeout = setTimeout(() => {
    petals.forEach(petal => {
        petal.classList.add('animated');
    })
}, 3000);

const petalsEndAnimationTimeout = setTimeout(() => {
    petals.forEach(petal => {
        petal.classList.add('animation-done');
    })
}, 5800);