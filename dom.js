// var headerfile=document.getElementById('header-title');

// console.log(headerfile.textContent);
// headerfile.textContent='hello world';
// console.log(headerfile.innerText);
// headerfile.innerText='good bye';
// console.log(headerfile);
// headerfile.style.borderBottom='solid 3px #000'

//var items=document.getElementsByClassName('list-group-item');
var itm=document.getElementById('item1');
var parent = document.getElementById('items');

var text = document.createTextNode('HEllo');

parent.insertBefore(text,itm);




// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 3px #000';
// header.style.backgroundColor='yellow';
// console.log(header);