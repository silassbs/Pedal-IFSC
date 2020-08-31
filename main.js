 // Smooth Scroll
 let scrollTo = (element) => {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop
    });
    }

    document.getElementById("intro").addEventListener('click', () => {
    scrollTo(document.getElementById("intro-anchor"));
    });

    document.getElementById("project").addEventListener('click', () => {
    scrollTo(document.getElementById("project-anchor"));
    });

    document.getElementById("how-it-works").addEventListener('click', () => {
    scrollTo(document.getElementById("how-it-works-anchor"));
    });

    // sticky header
    window.onscroll = function() {stickyFunction()}

    let header = document.querySelector('header');

    let sticky = header.offsetTop;

    function stickyFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }