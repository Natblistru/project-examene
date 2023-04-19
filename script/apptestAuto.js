let lectureNumber = parseInt(new URLSearchParams(window.location.search).get('lecture'));
//  console.log(lectureNumber); 

 async function app(){
    try { 
        const response = await fetch("teste.json");
        if (!response.ok) { 
        throw new Error(`HTTP error! status: ${response.status}`); } 
        const data = await response.json();
        const fileName = window.location.pathname.split('/').pop();
        let testeCurente = data.filter(test => test.lesson == lectureNumber&&test.fileCommon == fileName)
        console.log(testeCurente);

        let template = document.querySelector("#headTemplate").innerHTML;
        let testList = document.querySelector(".head");

        testeCurente.forEach(test => {
            let renderedHtml = Mustache.render(template, test);
            testList.innerHTML += renderedHtml;
        }); 
        
        const cards = document.querySelectorAll(".card__inner")
        cards.forEach(card => {
            card.addEventListener("click", () => {
                card.classList.toggle('is-flipped')
            })
        })

        } 
        catch (error) { 
            console.error('Error:', error); 
        }
}

app();




