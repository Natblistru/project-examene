let itemDescr = document.querySelectorAll(".panel")
let videoSourse = document.querySelectorAll("#scrollToVideo iframe")
const favoriteButtons = document.querySelectorAll('.add-bookmark-btn ');
const acc = document.getElementsByClassName("accordion");
let videoBreakpoints = document.querySelectorAll(".video-breakpoints-item");
let i;
let videoIndex = 0;

initialization();
function initialization() {
    videoSourse.forEach((card) => {
        card.classList.add("hide");
      });
    
     videoSourse[0].classList.remove("hide");
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    const elements = document.querySelectorAll('.active');
    elements.forEach(element => {
      element.classList.remove('active');
    });
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
        itemDescr.forEach((card) => {
        card.style.maxHeight = null;
        });
        panel.style.maxHeight = panel.scrollHeight + "px";
        this.classList.add("active");
        let videoSourse = document.querySelectorAll("#scrollToVideo iframe")
        videoSourse.forEach((card) => {
          card.classList.add("hide");
        });
        videoIndex = this.dataset.num-1;
        videoSourse[videoIndex].classList.remove("hide");
        
    }
  });
}



favoriteButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle("active");
    if (button.classList.contains('active')) {
      button.innerHTML = `<i class="fa-solid fa-bookmark"></i>`;
    } else {
      button.innerHTML = `<i class="fa-regular fa-bookmark"></i>`;;
    }

  });
});

videoBreakpoints.forEach(button => {
  button.addEventListener('click', event => {
   // videoSourse[videoIndex].outerHTML = '<iframe class="" width="100%" height="360" src="https://www.youtube.com/embed/yV9BAp0JzNA?start=48&autoplay=1&amp;enablejsapi=1" title="Conferinţa de Pace de la Paris" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen controls></iframe>';
    videoSourse[videoIndex].outerHTML = '<iframe class="" width="100%" height="360" src="https://www.youtube.com/embed/yV9BAp0JzNA?start=149&autoplay=1&amp;enablejsapi=1" title="Conferinţa de Pace de la Paris" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen controls></iframe>';
  
    videoSourse = document.querySelectorAll("#scrollToVideo iframe")
    videoSourse[videoIndex].addEventListener('load', () => {
      const playerWindow = videoSourse[videoIndex].contentWindow;
      setTimeout(function() {
        playerWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
      }, 500);
    });
 
  })
})






