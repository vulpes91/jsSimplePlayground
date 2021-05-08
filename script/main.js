console.log("Омниссия, благослови этот код!");


document.querySelector('.nav-icon-wrapper').addEventListener('click', function () {
    document.querySelector('.nav-icon').classList.toggle('active');
    console.log("нажал на меню");
});

document.querySelector('.square-wrapper').addEventListener('click', function () {
    document.querySelector('.square').classList.toggle('rotated');
    console.log("нажал на квадрат");
});

document.querySelector('.circle-wrapper').addEventListener('click', function () {
    document.querySelector('.circle').classList.toggle('shrinked');
    console.log("нажал на круг");
})