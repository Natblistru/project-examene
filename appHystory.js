
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
    if (panel.style.display === "block") {
      panel.style.display = "none";
    //  this.classList.remove("active");
    } else {
        itemDescr.forEach((card) => {
        card.style.display = "none";;
        });
      panel.style.display = "block";
      this.classList.add("active");
      videoSourse.forEach((card) => {
        card.classList.add("hide");
      });
      videoSourse[this.dataset.num-1].classList.remove("hide");
    }
  });
}


