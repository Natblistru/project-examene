const linksToTest = document.querySelectorAll(".item a");
let lectureNumber = parseInt(new URLSearchParams(window.location.search).get('lecture'));
let lesson = document.querySelector(".container");
// console.log(lectureNumber); 

async function app(){
    try { 
        const response = await fetch("../lectiiHystory.json");
         if (!response.ok) { 
            throw new Error(`HTTP error! status: ${response.status}`); } 
            const data = await response.json();
  
            let template = document.querySelector("#containerTemplate").innerHTML;
            lesson = document.querySelector(".container");
    
          let renderedHtml = Mustache.render(template, data[lectureNumber-1]);
          lesson.innerHTML += renderedHtml;
  
          } 
          catch (error) { 
             console.error('Error:', error); 
         }
    
    try { 
        const response = await fetch("teste.json");
         if (!response.ok) { 
            throw new Error(`HTTP error! status: ${response.status}`); } 
            const data = await response.json();
            let testeCurente = data.filter(test => test.lesson == lectureNumber)

            let template = document.querySelector("#listTemplate").innerHTML;
            let testList = document.querySelector(".container .list");
    
            testeCurente.forEach(test => {
              let renderedHtml = Mustache.render(template, test);
              testList.innerHTML += renderedHtml;
            });  
          } 
          catch (error) { 
             console.error('Error:', error); 
         }




  
  }
  app();

