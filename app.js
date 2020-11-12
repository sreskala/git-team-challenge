//Movement animation to happen
const card = document.querySelector('.animation-inner-container');
const container = document.querySelector('.animation-outer-container');

//items
const title1 = document.querySelector(".bashful__title-1");
const title2 = document.querySelector(".bashful__title-2");
const title3 = document.querySelector(".bashful__title-3");
const title4 = document.querySelector(".bashful__title-4");

//Moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth/2 - e.pageX) / 20;
    let yAxis = (window.innerHeight/2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animate in
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';

    //popout
    title1.style.transform = 'translateZ(50px)';
    title1.style.left = "0";
    title2.style.transform = 'translateZ(100px)';
    title2.style.left = "0";
    title3.style.transform = 'translateZ(150px)';
    title3.style.left = "0";
    title4.style.transform = 'translateZ(200px)';
    title4.style.left = "0";
});

//animate out
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //popback
    title1.style.transform = 'translateZ(0px)';
    title2.style.transform = 'translateZ(0px)';
    title3.style.transform = 'translateZ(0px)';
    title4.style.transform = 'translateZ(0px)';
});