
function updateTimer() {
    future = Date.parse("Dec 19, 2024 11:30:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div><div class=""><p class="mb-1 fs-12 text-fixed-white">DAYS</p><h4 class="mb-0 avatar d-block bg-white-transparent avatar-xxl mt-2 backdrop-blur">' + d + '</h4></div></div>' +
        '<div><div class=""><p class="mb-1 fs-12 text-fixed-white">HOURS</p><h4 class="avatar d-block bg-white-transparent avatar-xxl mb-0 mt-2 backdrop-blur">' + h + '</h4></div></div>' +
        '<div><div class=""><p class="mb-1 fs-12 text-fixed-white">MINUTES</p><h4 class="mb-0 avatar d-block bg-white-transparent avatar-xxl mt-2 backdrop-blur">' + m + '</h4></div></div>' +
        '<div><div class=""><p class="mb-1 fs-12 text-fixed-white">SECONDS</p><h4 class="mb-0 avatar d-block bg-white-transparent avatar-xxl mt-2 backdrop-blur">' + s + '</h4></div></div>'
}
setInterval('updateTimer()', 1000);


/* anime js */
var pathEls = document.querySelectorAll('path');
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(1000, 3000),
    delay: anime.random(0, 2000),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
}
/* anime js */