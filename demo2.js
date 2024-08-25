const removeButton = document.querySelector('button');
const addButton = document.getElementById('addcolor');


function myFunction(){
    thirdParagraph.remove();
 console.dir(removeButton)
}

function addFunction(event){
     firstParagraph.style.backgroundColor = 'blue';
   //firstParagraph.className = 'warning';
   firstParagraph.classList.add('warning')
}

removeButton.addEventListener('click', myFunction);
addButton.addEventListener('click', addFunction);

let firstParagraph = document.body.children[2].children[1];
console.log(firstParagraph)
const thirdParagraph = document.body.children[2].children[3];
console.log(thirdParagraph)







