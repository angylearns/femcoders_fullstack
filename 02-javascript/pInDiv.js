// What does this function do?  After returning a greeting, it creates a div and adds it to the body and then appends the whole greeting paragraph to the div.
function hiMyName(){
    // It asks for a name...
    let myName = prompt("Introduzca un nombre");
   
    // ...and returns a greeting inside the second paragraph.
    let hi =  document.querySelectorAll('p')[1];
    hi.innerText = "Hi " + myName

    let hiBox = document.createElement('div');
    document.body.appendChild(hiBox);
    hiBox.style.height = '50px';
    hiBox.style.backgroundColor = 'red';
    
    let paragraph = document.getElementsByTagName('p')[1];
    let theDiv = document.getElementsByTagName('div')[0];
    theDiv.appendChild(paragraph);
};