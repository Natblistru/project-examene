const buttonsQuiz = document.querySelectorAll(".gridWrapper .choice-image")
const buttonCheck = document.querySelector(".pageFooterContainer .buttonMain")
const stepWrapper = document.querySelector(".stepWrapper")
const pageContent = document.querySelector(".pageContentBody")

buttonCheck.classList.add('disabled')

buttonsQuiz.forEach(button => {
    button.addEventListener("click", ()=> {
        buttonsQuiz.forEach(b => {
            b.classList.remove('selected')
        })
        buttonCheck.classList.remove('disabled')
        button.classList.add('selected')
    })
})

buttonCheck.addEventListener("click", ()=> {
    stepWrapper.classList.add('disabled')
    buttonsQuiz.forEach(b => {
        b.classList.replace('selected','right')
    })
    buttonCheck.textContent = "Дальше";
    pageContent.innerHTML += `
    <div class="stepWrapper step-result">
                                <div class="slateBoxFlex answer">
                                    <h2>
                                       <span>
                                          <span class="slate-text-leaf">
                                             <span>Узнаем об этом в уроке!</span>
                                          </span>
                                       </span>
                                    </h2>
                                    <div class="contentBody24">
                                       <span>
                                          <span class="slate-text-leaf">
                                             <span>А ещё ты:</span>
                                          </span>
                                       </span>
                                    </div>
                                    <div class="gridWrapper">
                                       <div class="slate-image-wrapper">
                                          <div contenteditable="false">
                                             <img src="https://cdn.uchi.ru/uchiru-five-eleven/82a54d91-4930-4d24-8be2-e3369f6a869b" alt="">
                                         </div>
                                         <div class="slate-body18">
                                            <span>
                                               <span class="slate-text-leaf">
                                                  <span data-slate-zero-width="n" data-slate-length="0">﻿<br></span>
                                               </span>
                                            </span>
                                         </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div data-slate-node="element" style="display: none;" class="styles__ContentBody18-sc-mx5y16-5 hIfTwq">
                                    <span data-slate-node="text">
                                       <span data-slate-leaf="true" class="styles__StyledSlateTextLeaf-sc-mx5y16-0 ppGWT">
                                          <span data-slate-zero-width="n" data-slate-length="0">﻿<br></span>
                                       </span>
                                    </span>
                                 </div>
                             </div>
    `
})
