async function app(){
    try { 
      const response = await fetch(`cursuri.json`);
       if (!response.ok) { 
          throw new Error(`HTTP error! status: ${response.status}`); } 
          const data = await response.json();
console.log(data)
          let template = document.querySelector("#catalog-contentTemplate").innerHTML;
          lessonsList = document.querySelector(".main-catalog .catalog-content");
  
          data.forEach(curs => {
            let renderedHtml = Mustache.render(template, curs);
            lessonsList.innerHTML += renderedHtml;
          });

        } 
        catch (error) { 
           console.error('Error:', error); 
       }
  
  }
  app();