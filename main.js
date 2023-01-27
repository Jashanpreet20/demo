// var items=document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor='green';

// for(var i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight='bold';
// }


// console.log(item);
// console.log(items);

// var li=document.getElementsByTagName('li');
// li[1].style.backgroundColor='green';
// li[2].style.span="display:none";




// // console.log(li);

//  var odd=document.querySelectorAll('li:nth-child(odd)');
 
//  for(var i=0; i<odd.length; i++)
//  {
//     odd[i].style.backgroundColor='green';
//  }
//  var odd=document.querySelectorAll('li');
//  odd[1].style.color='green';

// var itemlist=document.querySelector('#items');

 //parent node
//  console.log(itemlist.parentNode);
//  console.log(itemlist.parentNode.style.backgroundColor='green');
//  console.log(itemlist.children[1].style.backgroundColor='yellow');
//  console.log(itemlist.parentNode.parentNode);

 //parent element
   
//  console.log(itemlist.parentElement);
//  console.log(itemlist.parentElement.style.backgroundColor='green');
//  console.log(itemlist.children[1].style.backgroundColor='blue');
//  console.log(itemlist.parentElement.parentElement);

//  //child nodes
//  console.log(itemlist.children);
//  console.log(itemlist.children[1].style.backgroundColor='yellow');


//first child
// console.log(itemlist.firstChild);
// //Firstelement child

// console.log(itemlist.firstElementChild.textContent='hello world');
// console.log(itemlist.firstElementChild.style.backgroundColor='pink');

// //lastelementchild and lastchild

// console.log(itemlist.lastChild);
// console.log(itemlist.lastElementChild.style.backgroundColor='brown');
// console.log(itemlist.lastElementChild.textContent='hello 4');

// //previoussibilings

// console.log(itemlist.previousElementSibling.style.backgroundColor='red');
// console.log(itemlist.previousElementSibling.style.color='blue');

//create element

// var newdiv=document.createElement('div');
// //add class
// newdiv.className='new div';
// newdiv.id='new div id';
// //add attributes
// newdiv.setAttribute('title','head');
// //add text
// var divtext=document.createTextNode('HEllo');

// newdiv.appendChild(divtext);
// newdiv.style.fontSize='30px';
// newdiv.style.color='blue';

// console.log(newdiv);

// //add this div
// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');

// container.insertBefore(newdiv,h1);

// var newword=document.createElement('div');
// var newwordtext=document.createTextNode('HEllo');
// newword.appendChild(newwordtext);
// newword.style.backgroundColor='pink';
// newword.style.fontSize='10px';


// var items=document.querySelector('div .items');
// var li=document.querySelector('div li');

// items.insertBefore(newword,li.children[0]);

var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');

//form sumbit event
form.addEventListener('submit',additem);
//delete event
itemlist.addEventListener('click',removeitem);

//add item function

function additem(e)
{
    
    e.preventDefault();
    //console.log(1);
   
    //get input value
var newitem=document.getElementById('item').value;

//create new element
var li =document.createElement('li');
li.className='list-group-item';
//console.log(li);

//add textnode
li.appendChild(document.createTextNode(newitem));

//create delete button element
var buttondlt=document.createElement('button');
//add classes
buttondlt.className=("btn btn-danger btn-sm float-right delete");

// append text node
buttondlt.appendChild(document.createTextNode('x'));

li.appendChild(buttondlt);

//create delete button element
var buttondlt1=document.createElement('button');
//add classes
buttondlt1.style.backgroundColor='green';
buttondlt1.style.marginRight='16px';
buttondlt1.className=("btn btn-danger btn-sm float-right delete");

// append text node
buttondlt1.appendChild(document.createTextNode('edit'));

li.appendChild(buttondlt1);


itemlist.appendChild(li);
}

function removeitem(e)
{
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}


