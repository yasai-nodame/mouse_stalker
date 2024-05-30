document.addEventListener("DOMContentLoaded", function() {
    const stalker = document.createElement('div');
    stalker.classList.add('stalker');
    document.body.appendChild(stalker);

    document.addEventListener("mousemove", function(e){
        const x = e.clientX;
        const y = e.clientY;

        stalker.style.opacity = "1";
        stalker.style.transform = "translate(" + x + "px," + y + "px)";
    });
});