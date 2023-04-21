const dragItems = document.querySelectorAll(".dragItem")
const dropZones = document.querySelectorAll(".dropZone")
let draggedItem = null;
let droppedItem = null;

dragItems.forEach(dragItem => {
    dragItem.addEventListener("dragstart", handlerDragStart);
    dragItem.addEventListener("dragend", handlerDragEnd);

    dragItem.addEventListener("dragenter", () => {
        if (draggedItem !== droppedItem) {
            droppedItem = dragItem;
        }
    })
    dragItem.addEventListener("dragleave", () => {
        droppedItem = null;
    })
})

function handlerDragStart(event) {
    this.classList.add('dragItem--active')
    draggedItem = this;
 }
function handlerDragEnd(event) {
    this.classList.remove('dragItem--active')
    draggedItem = null
}
dropZones.forEach(dropZone => {
    dropZone.addEventListener("dragenter", handlerDragEnter)
    dropZone.addEventListener("dragleave", handlerDragLeave)
    dropZone.addEventListener("dragover", handlerDragOver)
    dropZone.addEventListener("drop", handlerDrop)
})

function handlerDragEnter(event) {
    this.classList.add('dropZone--active')
}
function handlerDragOver(event) {
    event.preventDefault()
}
function handlerDragLeave(event) {
    this.classList.remove('dropZone--active')
}
function handlerDrop(event) {
    if (droppedItem) {
        if(droppedItem.parentElement === draggedItem.parentElement) {
            console.log(droppedItem.parentElement)
            const children = Array.from(droppedItem.parentElement.children)
            const draggedIndex = children.indexOf(draggedItem)
            const droppedIndex = children.indexOf(droppedItem)
            if (draggedIndex > droppedIndex) {
                draggedItem.parentElement.insertBefore(draggedItem,droppedItem)
            } else {
                draggedItem.parentElement.insertBefore(draggedItem,droppedItem.nextElementSibling)
            }
        } else {
            this.insertBefore(draggedItem, droppedItem)
        }
        
    } else {
        this.append(draggedItem)
    }
    dropZones.forEach(x => x.classList.remove('dropZone--active'))
}