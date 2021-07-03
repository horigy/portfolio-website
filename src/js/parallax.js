

// var rellax = new Rellax('.rellax');
    

window.addEventListener('scroll', function(e) {
    const target = document.querySelector('.p-baloon');
    const target2 = document.querySelector('.p-cloud');
    const scrolled = window.pageYOffset;
    var rate = scrolled * 0.3;
    var rate2 = scrolled * 0.1;
    target.style.transform = 'translate3d('+rate2+'px, '+rate+'px, 0px)';
    target2.style.transform = 'translate3d(0px, '+rate2+'px, 0px)';
})