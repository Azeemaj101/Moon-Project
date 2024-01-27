function collapse(a) {
  let sign = document.getElementById(a);
  if (sign.innerText === "+") {
    sign.innerText = "-";
  } else {
    sign.innerText = "+";
  }
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var backToTopButton = document.querySelector(".back-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var lastScrollTop = 0;

window.addEventListener("scroll", function () {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    // Scrolling down
    document.querySelector(".navbar").classList.add("hide-nav");
    document.querySelector(".navbar").classList.remove("show-nav");
  } else {
    // Scrolling up
    document.querySelector(".navbar").classList.remove("hide-nav");
    document.querySelector(".navbar").classList.add("show-nav");
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});


AOS.init({
    duration: 800, // Duration of animation in milliseconds
    easing: 'ease-in-out', // Timing function for the animation
    once: true, // Whether animation should happen only once
    mirror: false, // Whether elements should animate out while scrolling past them in reverse
  });


  function adjustY2() {
    const line = document.querySelector('#lineSvg line');
    const screenWidth = window.innerWidth;

    // Set different y2 values based on screen width
    if (screenWidth < 992) {
      line.setAttribute('y2', '84%');
    }
    else if (screenWidth < 1200) {
      line.setAttribute('y2', '80.5%');
    } else {
      line.setAttribute('y2', '78%');
    }
  }

  // Call the function on page load
  adjustY2();

  // Attach the function to the window resize event
  window.addEventListener('resize', adjustY2);