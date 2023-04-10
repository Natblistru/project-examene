
// let acc = document.getElementsByClassName("video-lesson-item-head");
 let itemDescr = document.querySelectorAll(".panel")
// let btn1 = document.querySelector('.video-lesson-item-head[data-num-video="1"] ');
let videoSourse = document.querySelectorAll("#scrollToVideo iframe")
var acc = document.getElementsByClassName("accordion");
var i;

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
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
        itemDescr.forEach((card) => {
        card.style.maxHeight = null;
        });
        panel.style.maxHeight = panel.scrollHeight + "px";
        this.classList.add("active");
        videoSourse.forEach((card) => {
          card.classList.add("hide");
        });
        videoSourse[this.dataset.num-1].classList.remove("hide");
    }
  });
}

const favoriteButtons = document.querySelectorAll('.add-bookmark-btn ');

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

