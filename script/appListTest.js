const linksToTest = document.querySelectorAll(".item a");
let lectureNumber = parseInt(new URLSearchParams(window.location.search).get('lecture'));
console.log(lectureNumber); 

// linksToTest.forEach(link => {
//     link.addEventListener("click", (e) => {
//         e.target.href = e.target.href + '?lecture=${lectureNumber}';
//         console.log(e.target.href)
//     })
// })

